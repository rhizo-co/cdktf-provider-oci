# `dataOciCoreComputeCapacityTopologyComputeBareMetalHosts` Submodule <a name="`dataOciCoreComputeCapacityTopologyComputeBareMetalHosts` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreComputeCapacityTopologyComputeBareMetalHosts <a name="DataOciCoreComputeCapacityTopologyComputeBareMetalHosts" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts oci_core_compute_capacity_topology_compute_bare_metal_hosts}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_compute_capacity_topology_compute_bare_metal_hosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts;

DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .computeCapacityTopologyId(java.lang.String)
//  .availabilityDomain(java.lang.String)
//  .compartmentId(java.lang.String)
//  .computeHpcIslandId(java.lang.String)
//  .computeLocalBlockId(java.lang.String)
//  .computeNetworkBlockId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.computeCapacityTopologyId">computeCapacityTopologyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_capacity_topology_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_capacity_topology_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#availability_domain DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compartment_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.computeHpcIslandId">computeHpcIslandId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_hpc_island_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_hpc_island_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.computeLocalBlockId">computeLocalBlockId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_local_block_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_local_block_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.computeNetworkBlockId">computeNetworkBlockId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_network_block_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_network_block_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `computeCapacityTopologyId`<sup>Required</sup> <a name="computeCapacityTopologyId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.computeCapacityTopologyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_capacity_topology_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_capacity_topology_id}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.availabilityDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#availability_domain DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#availability_domain}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compartment_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compartment_id}.

---

##### `computeHpcIslandId`<sup>Optional</sup> <a name="computeHpcIslandId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.computeHpcIslandId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_hpc_island_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_hpc_island_id}.

---

##### `computeLocalBlockId`<sup>Optional</sup> <a name="computeLocalBlockId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.computeLocalBlockId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_local_block_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_local_block_id}.

---

##### `computeNetworkBlockId`<sup>Optional</sup> <a name="computeNetworkBlockId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.computeNetworkBlockId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_network_block_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_network_block_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#filter DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetComputeHpcIslandId">resetComputeHpcIslandId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetComputeLocalBlockId">resetComputeLocalBlockId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetComputeNetworkBlockId">resetComputeNetworkBlockId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter</a>>

---

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetAvailabilityDomain"></a>

```java
public void resetAvailabilityDomain()
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetComputeHpcIslandId` <a name="resetComputeHpcIslandId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetComputeHpcIslandId"></a>

```java
public void resetComputeHpcIslandId()
```

##### `resetComputeLocalBlockId` <a name="resetComputeLocalBlockId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetComputeLocalBlockId"></a>

```java
public void resetComputeLocalBlockId()
```

##### `resetComputeNetworkBlockId` <a name="resetComputeNetworkBlockId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetComputeNetworkBlockId"></a>

```java
public void resetComputeNetworkBlockId()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreComputeCapacityTopologyComputeBareMetalHosts resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_compute_capacity_topology_compute_bare_metal_hosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts;

DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_compute_capacity_topology_compute_bare_metal_hosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts;

DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_compute_capacity_topology_compute_bare_metal_hosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts;

DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_compute_capacity_topology_compute_bare_metal_hosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts;

DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciCoreComputeCapacityTopologyComputeBareMetalHosts resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciCoreComputeCapacityTopologyComputeBareMetalHosts to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciCoreComputeCapacityTopologyComputeBareMetalHosts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreComputeCapacityTopologyComputeBareMetalHosts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeBareMetalHostCollection">computeBareMetalHostCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeCapacityTopologyIdInput">computeCapacityTopologyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeHpcIslandIdInput">computeHpcIslandIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeLocalBlockIdInput">computeLocalBlockIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeNetworkBlockIdInput">computeNetworkBlockIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeCapacityTopologyId">computeCapacityTopologyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeHpcIslandId">computeHpcIslandId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeLocalBlockId">computeLocalBlockId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeNetworkBlockId">computeNetworkBlockId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `computeBareMetalHostCollection`<sup>Required</sup> <a name="computeBareMetalHostCollection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeBareMetalHostCollection"></a>

```java
public DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList getComputeBareMetalHostCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.filter"></a>

```java
public DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.availabilityDomainInput"></a>

```java
public java.lang.String getAvailabilityDomainInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `computeCapacityTopologyIdInput`<sup>Optional</sup> <a name="computeCapacityTopologyIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeCapacityTopologyIdInput"></a>

```java
public java.lang.String getComputeCapacityTopologyIdInput();
```

- *Type:* java.lang.String

---

##### `computeHpcIslandIdInput`<sup>Optional</sup> <a name="computeHpcIslandIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeHpcIslandIdInput"></a>

```java
public java.lang.String getComputeHpcIslandIdInput();
```

- *Type:* java.lang.String

---

##### `computeLocalBlockIdInput`<sup>Optional</sup> <a name="computeLocalBlockIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeLocalBlockIdInput"></a>

```java
public java.lang.String getComputeLocalBlockIdInput();
```

- *Type:* java.lang.String

---

##### `computeNetworkBlockIdInput`<sup>Optional</sup> <a name="computeNetworkBlockIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeNetworkBlockIdInput"></a>

```java
public java.lang.String getComputeNetworkBlockIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `computeCapacityTopologyId`<sup>Required</sup> <a name="computeCapacityTopologyId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeCapacityTopologyId"></a>

```java
public java.lang.String getComputeCapacityTopologyId();
```

- *Type:* java.lang.String

---

##### `computeHpcIslandId`<sup>Required</sup> <a name="computeHpcIslandId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeHpcIslandId"></a>

```java
public java.lang.String getComputeHpcIslandId();
```

- *Type:* java.lang.String

---

##### `computeLocalBlockId`<sup>Required</sup> <a name="computeLocalBlockId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeLocalBlockId"></a>

```java
public java.lang.String getComputeLocalBlockId();
```

- *Type:* java.lang.String

---

##### `computeNetworkBlockId`<sup>Required</sup> <a name="computeNetworkBlockId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeNetworkBlockId"></a>

```java
public java.lang.String getComputeNetworkBlockId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollection <a name="DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_compute_capacity_topology_compute_bare_metal_hosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollection;

DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollection.builder()
    .build();
```


### DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItems <a name="DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_compute_capacity_topology_compute_bare_metal_hosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItems;

DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItems.builder()
    .build();
```


### DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig <a name="DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_compute_capacity_topology_compute_bare_metal_hosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig;

DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .computeCapacityTopologyId(java.lang.String)
//  .availabilityDomain(java.lang.String)
//  .compartmentId(java.lang.String)
//  .computeHpcIslandId(java.lang.String)
//  .computeLocalBlockId(java.lang.String)
//  .computeNetworkBlockId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.computeCapacityTopologyId">computeCapacityTopologyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_capacity_topology_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_capacity_topology_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#availability_domain DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compartment_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.computeHpcIslandId">computeHpcIslandId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_hpc_island_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_hpc_island_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.computeLocalBlockId">computeLocalBlockId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_local_block_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_local_block_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.computeNetworkBlockId">computeNetworkBlockId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_network_block_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_network_block_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `computeCapacityTopologyId`<sup>Required</sup> <a name="computeCapacityTopologyId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.computeCapacityTopologyId"></a>

```java
public java.lang.String getComputeCapacityTopologyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_capacity_topology_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_capacity_topology_id}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#availability_domain DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#availability_domain}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compartment_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compartment_id}.

---

##### `computeHpcIslandId`<sup>Optional</sup> <a name="computeHpcIslandId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.computeHpcIslandId"></a>

```java
public java.lang.String getComputeHpcIslandId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_hpc_island_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_hpc_island_id}.

---

##### `computeLocalBlockId`<sup>Optional</sup> <a name="computeLocalBlockId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.computeLocalBlockId"></a>

```java
public java.lang.String getComputeLocalBlockId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_local_block_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_local_block_id}.

---

##### `computeNetworkBlockId`<sup>Optional</sup> <a name="computeNetworkBlockId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.computeNetworkBlockId"></a>

```java
public java.lang.String getComputeNetworkBlockId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_network_block_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_network_block_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#filter DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter <a name="DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_compute_capacity_topology_compute_bare_metal_hosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter;

DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#name DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#values DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#regex DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#name DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#values DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#regex DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList <a name="DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_compute_capacity_topology_compute_bare_metal_hosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList;

new DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.get"></a>

```java
public DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference <a name="DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_compute_capacity_topology_compute_bare_metal_hosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference;

new DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.computeCapacityTopologyId">computeCapacityTopologyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.computeHpcIslandId">computeHpcIslandId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.computeLocalBlockId">computeLocalBlockId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.computeNetworkBlockId">computeNetworkBlockId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.instanceShape">instanceShape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItems">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `computeCapacityTopologyId`<sup>Required</sup> <a name="computeCapacityTopologyId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.computeCapacityTopologyId"></a>

```java
public java.lang.String getComputeCapacityTopologyId();
```

- *Type:* java.lang.String

---

##### `computeHpcIslandId`<sup>Required</sup> <a name="computeHpcIslandId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.computeHpcIslandId"></a>

```java
public java.lang.String getComputeHpcIslandId();
```

- *Type:* java.lang.String

---

##### `computeLocalBlockId`<sup>Required</sup> <a name="computeLocalBlockId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.computeLocalBlockId"></a>

```java
public java.lang.String getComputeLocalBlockId();
```

- *Type:* java.lang.String

---

##### `computeNetworkBlockId`<sup>Required</sup> <a name="computeNetworkBlockId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.computeNetworkBlockId"></a>

```java
public java.lang.String getComputeNetworkBlockId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `instanceShape`<sup>Required</sup> <a name="instanceShape" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.instanceShape"></a>

```java
public java.lang.String getInstanceShape();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItems">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItems</a>

---


### DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList <a name="DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_compute_capacity_topology_compute_bare_metal_hosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList;

new DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.get"></a>

```java
public DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference <a name="DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_compute_capacity_topology_compute_bare_metal_hosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference;

new DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollection">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.property.items"></a>

```java
public DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.property.internalValue"></a>

```java
public DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollection">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollection</a>

---


### DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList <a name="DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_compute_capacity_topology_compute_bare_metal_hosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList;

new DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.get"></a>

```java
public DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter</a>>

---


### DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference <a name="DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_compute_capacity_topology_compute_bare_metal_hosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference;

new DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter</a>

---



