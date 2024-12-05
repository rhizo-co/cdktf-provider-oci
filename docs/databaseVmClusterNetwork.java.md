# `databaseVmClusterNetwork` Submodule <a name="`databaseVmClusterNetwork` Submodule" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseVmClusterNetwork <a name="DatabaseVmClusterNetwork" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network oci_database_vm_cluster_network}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_network.DatabaseVmClusterNetwork;

DatabaseVmClusterNetwork.Builder.create(Construct scope, java.lang.String id)
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
    .compartmentId(java.lang.String)
    .displayName(java.lang.String)
    .exadataInfrastructureId(java.lang.String)
    .scans(IResolvable)
    .scans(java.util.List<DatabaseVmClusterNetworkScans>)
    .vmNetworks(IResolvable)
    .vmNetworks(java.util.List<DatabaseVmClusterNetworkVmNetworks>)
//  .action(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .dns(java.util.List<java.lang.String>)
//  .drScans(IResolvable)
//  .drScans(java.util.List<DatabaseVmClusterNetworkDrScans>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .ntp(java.util.List<java.lang.String>)
//  .timeouts(DatabaseVmClusterNetworkTimeouts)
//  .validateVmClusterNetwork(java.lang.Boolean)
//  .validateVmClusterNetwork(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#compartment_id DatabaseVmClusterNetwork#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#display_name DatabaseVmClusterNetwork#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.exadataInfrastructureId">exadataInfrastructureId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#exadata_infrastructure_id DatabaseVmClusterNetwork#exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.scans">scans</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans">DatabaseVmClusterNetworkScans</a>></code> | scans block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.vmNetworks">vmNetworks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks">DatabaseVmClusterNetworkVmNetworks</a>></code> | vm_networks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#action DatabaseVmClusterNetwork#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#defined_tags DatabaseVmClusterNetwork#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.dns">dns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#dns DatabaseVmClusterNetwork#dns}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.drScans">drScans</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans">DatabaseVmClusterNetworkDrScans</a>></code> | dr_scans block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#freeform_tags DatabaseVmClusterNetwork#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#id DatabaseVmClusterNetwork#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.ntp">ntp</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#ntp DatabaseVmClusterNetwork#ntp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts">DatabaseVmClusterNetworkTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.validateVmClusterNetwork">validateVmClusterNetwork</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#validate_vm_cluster_network DatabaseVmClusterNetwork#validate_vm_cluster_network}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#compartment_id DatabaseVmClusterNetwork#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#display_name DatabaseVmClusterNetwork#display_name}.

---

##### `exadataInfrastructureId`<sup>Required</sup> <a name="exadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.exadataInfrastructureId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#exadata_infrastructure_id DatabaseVmClusterNetwork#exadata_infrastructure_id}.

---

##### `scans`<sup>Required</sup> <a name="scans" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.scans"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans">DatabaseVmClusterNetworkScans</a>>

scans block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#scans DatabaseVmClusterNetwork#scans}

---

##### `vmNetworks`<sup>Required</sup> <a name="vmNetworks" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.vmNetworks"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks">DatabaseVmClusterNetworkVmNetworks</a>>

vm_networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#vm_networks DatabaseVmClusterNetwork#vm_networks}

---

##### `action`<sup>Optional</sup> <a name="action" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.action"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#action DatabaseVmClusterNetwork#action}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#defined_tags DatabaseVmClusterNetwork#defined_tags}.

---

##### `dns`<sup>Optional</sup> <a name="dns" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.dns"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#dns DatabaseVmClusterNetwork#dns}.

---

##### `drScans`<sup>Optional</sup> <a name="drScans" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.drScans"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans">DatabaseVmClusterNetworkDrScans</a>>

dr_scans block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#dr_scans DatabaseVmClusterNetwork#dr_scans}

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#freeform_tags DatabaseVmClusterNetwork#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#id DatabaseVmClusterNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ntp`<sup>Optional</sup> <a name="ntp" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.ntp"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#ntp DatabaseVmClusterNetwork#ntp}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts">DatabaseVmClusterNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#timeouts DatabaseVmClusterNetwork#timeouts}

---

##### `validateVmClusterNetwork`<sup>Optional</sup> <a name="validateVmClusterNetwork" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.validateVmClusterNetwork"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#validate_vm_cluster_network DatabaseVmClusterNetwork#validate_vm_cluster_network}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.putDrScans">putDrScans</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.putScans">putScans</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.putVmNetworks">putVmNetworks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetDns">resetDns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetDrScans">resetDrScans</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetNtp">resetNtp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetValidateVmClusterNetwork">resetValidateVmClusterNetwork</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDrScans` <a name="putDrScans" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.putDrScans"></a>

```java
public void putDrScans(IResolvable OR java.util.List<DatabaseVmClusterNetworkDrScans> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.putDrScans.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans">DatabaseVmClusterNetworkDrScans</a>>

---

##### `putScans` <a name="putScans" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.putScans"></a>

```java
public void putScans(IResolvable OR java.util.List<DatabaseVmClusterNetworkScans> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.putScans.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans">DatabaseVmClusterNetworkScans</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.putTimeouts"></a>

```java
public void putTimeouts(DatabaseVmClusterNetworkTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts">DatabaseVmClusterNetworkTimeouts</a>

---

##### `putVmNetworks` <a name="putVmNetworks" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.putVmNetworks"></a>

```java
public void putVmNetworks(IResolvable OR java.util.List<DatabaseVmClusterNetworkVmNetworks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.putVmNetworks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks">DatabaseVmClusterNetworkVmNetworks</a>>

---

##### `resetAction` <a name="resetAction" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetAction"></a>

```java
public void resetAction()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDns` <a name="resetDns" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetDns"></a>

```java
public void resetDns()
```

##### `resetDrScans` <a name="resetDrScans" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetDrScans"></a>

```java
public void resetDrScans()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetId"></a>

```java
public void resetId()
```

##### `resetNtp` <a name="resetNtp" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetNtp"></a>

```java
public void resetNtp()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetValidateVmClusterNetwork` <a name="resetValidateVmClusterNetwork" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetValidateVmClusterNetwork"></a>

```java
public void resetValidateVmClusterNetwork()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseVmClusterNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_network.DatabaseVmClusterNetwork;

DatabaseVmClusterNetwork.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_network.DatabaseVmClusterNetwork;

DatabaseVmClusterNetwork.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_network.DatabaseVmClusterNetwork;

DatabaseVmClusterNetwork.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_network.DatabaseVmClusterNetwork;

DatabaseVmClusterNetwork.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseVmClusterNetwork.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseVmClusterNetwork resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseVmClusterNetwork to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseVmClusterNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseVmClusterNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.drScans">drScans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList">DatabaseVmClusterNetworkDrScansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.scans">scans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList">DatabaseVmClusterNetworkScansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference">DatabaseVmClusterNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.vmClusterId">vmClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.vmNetworks">vmNetworks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList">DatabaseVmClusterNetworkVmNetworksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.dnsInput">dnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.drScansInput">drScansInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans">DatabaseVmClusterNetworkDrScans</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.exadataInfrastructureIdInput">exadataInfrastructureIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.ntpInput">ntpInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.scansInput">scansInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans">DatabaseVmClusterNetworkScans</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts">DatabaseVmClusterNetworkTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.validateVmClusterNetworkInput">validateVmClusterNetworkInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.vmNetworksInput">vmNetworksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks">DatabaseVmClusterNetworkVmNetworks</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.dns">dns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.exadataInfrastructureId">exadataInfrastructureId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.ntp">ntp</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.validateVmClusterNetwork">validateVmClusterNetwork</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `drScans`<sup>Required</sup> <a name="drScans" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.drScans"></a>

```java
public DatabaseVmClusterNetworkDrScansList getDrScans();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList">DatabaseVmClusterNetworkDrScansList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `scans`<sup>Required</sup> <a name="scans" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.scans"></a>

```java
public DatabaseVmClusterNetworkScansList getScans();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList">DatabaseVmClusterNetworkScansList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.timeouts"></a>

```java
public DatabaseVmClusterNetworkTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference">DatabaseVmClusterNetworkTimeoutsOutputReference</a>

---

##### `vmClusterId`<sup>Required</sup> <a name="vmClusterId" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.vmClusterId"></a>

```java
public java.lang.String getVmClusterId();
```

- *Type:* java.lang.String

---

##### `vmNetworks`<sup>Required</sup> <a name="vmNetworks" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.vmNetworks"></a>

```java
public DatabaseVmClusterNetworkVmNetworksList getVmNetworks();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList">DatabaseVmClusterNetworkVmNetworksList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `dnsInput`<sup>Optional</sup> <a name="dnsInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.dnsInput"></a>

```java
public java.util.List<java.lang.String> getDnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `drScansInput`<sup>Optional</sup> <a name="drScansInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.drScansInput"></a>

```java
public java.lang.Object getDrScansInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans">DatabaseVmClusterNetworkDrScans</a>>

---

##### `exadataInfrastructureIdInput`<sup>Optional</sup> <a name="exadataInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.exadataInfrastructureIdInput"></a>

```java
public java.lang.String getExadataInfrastructureIdInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ntpInput`<sup>Optional</sup> <a name="ntpInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.ntpInput"></a>

```java
public java.util.List<java.lang.String> getNtpInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scansInput`<sup>Optional</sup> <a name="scansInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.scansInput"></a>

```java
public java.lang.Object getScansInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans">DatabaseVmClusterNetworkScans</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts">DatabaseVmClusterNetworkTimeouts</a>

---

##### `validateVmClusterNetworkInput`<sup>Optional</sup> <a name="validateVmClusterNetworkInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.validateVmClusterNetworkInput"></a>

```java
public java.lang.Object getValidateVmClusterNetworkInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vmNetworksInput`<sup>Optional</sup> <a name="vmNetworksInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.vmNetworksInput"></a>

```java
public java.lang.Object getVmNetworksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks">DatabaseVmClusterNetworkVmNetworks</a>>

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `dns`<sup>Required</sup> <a name="dns" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.dns"></a>

```java
public java.util.List<java.lang.String> getDns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exadataInfrastructureId`<sup>Required</sup> <a name="exadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.exadataInfrastructureId"></a>

```java
public java.lang.String getExadataInfrastructureId();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ntp`<sup>Required</sup> <a name="ntp" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.ntp"></a>

```java
public java.util.List<java.lang.String> getNtp();
```

- *Type:* java.util.List<java.lang.String>

---

##### `validateVmClusterNetwork`<sup>Required</sup> <a name="validateVmClusterNetwork" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.validateVmClusterNetwork"></a>

```java
public java.lang.Object getValidateVmClusterNetwork();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseVmClusterNetworkConfig <a name="DatabaseVmClusterNetworkConfig" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_network.DatabaseVmClusterNetworkConfig;

DatabaseVmClusterNetworkConfig.builder()
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
    .compartmentId(java.lang.String)
    .displayName(java.lang.String)
    .exadataInfrastructureId(java.lang.String)
    .scans(IResolvable)
    .scans(java.util.List<DatabaseVmClusterNetworkScans>)
    .vmNetworks(IResolvable)
    .vmNetworks(java.util.List<DatabaseVmClusterNetworkVmNetworks>)
//  .action(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .dns(java.util.List<java.lang.String>)
//  .drScans(IResolvable)
//  .drScans(java.util.List<DatabaseVmClusterNetworkDrScans>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .ntp(java.util.List<java.lang.String>)
//  .timeouts(DatabaseVmClusterNetworkTimeouts)
//  .validateVmClusterNetwork(java.lang.Boolean)
//  .validateVmClusterNetwork(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#compartment_id DatabaseVmClusterNetwork#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#display_name DatabaseVmClusterNetwork#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.exadataInfrastructureId">exadataInfrastructureId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#exadata_infrastructure_id DatabaseVmClusterNetwork#exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.scans">scans</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans">DatabaseVmClusterNetworkScans</a>></code> | scans block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.vmNetworks">vmNetworks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks">DatabaseVmClusterNetworkVmNetworks</a>></code> | vm_networks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#action DatabaseVmClusterNetwork#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#defined_tags DatabaseVmClusterNetwork#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.dns">dns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#dns DatabaseVmClusterNetwork#dns}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.drScans">drScans</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans">DatabaseVmClusterNetworkDrScans</a>></code> | dr_scans block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#freeform_tags DatabaseVmClusterNetwork#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#id DatabaseVmClusterNetwork#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.ntp">ntp</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#ntp DatabaseVmClusterNetwork#ntp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts">DatabaseVmClusterNetworkTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.validateVmClusterNetwork">validateVmClusterNetwork</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#validate_vm_cluster_network DatabaseVmClusterNetwork#validate_vm_cluster_network}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#compartment_id DatabaseVmClusterNetwork#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#display_name DatabaseVmClusterNetwork#display_name}.

---

##### `exadataInfrastructureId`<sup>Required</sup> <a name="exadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.exadataInfrastructureId"></a>

```java
public java.lang.String getExadataInfrastructureId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#exadata_infrastructure_id DatabaseVmClusterNetwork#exadata_infrastructure_id}.

---

##### `scans`<sup>Required</sup> <a name="scans" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.scans"></a>

```java
public java.lang.Object getScans();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans">DatabaseVmClusterNetworkScans</a>>

scans block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#scans DatabaseVmClusterNetwork#scans}

---

##### `vmNetworks`<sup>Required</sup> <a name="vmNetworks" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.vmNetworks"></a>

```java
public java.lang.Object getVmNetworks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks">DatabaseVmClusterNetworkVmNetworks</a>>

vm_networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#vm_networks DatabaseVmClusterNetwork#vm_networks}

---

##### `action`<sup>Optional</sup> <a name="action" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#action DatabaseVmClusterNetwork#action}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#defined_tags DatabaseVmClusterNetwork#defined_tags}.

---

##### `dns`<sup>Optional</sup> <a name="dns" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.dns"></a>

```java
public java.util.List<java.lang.String> getDns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#dns DatabaseVmClusterNetwork#dns}.

---

##### `drScans`<sup>Optional</sup> <a name="drScans" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.drScans"></a>

```java
public java.lang.Object getDrScans();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans">DatabaseVmClusterNetworkDrScans</a>>

dr_scans block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#dr_scans DatabaseVmClusterNetwork#dr_scans}

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#freeform_tags DatabaseVmClusterNetwork#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#id DatabaseVmClusterNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ntp`<sup>Optional</sup> <a name="ntp" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.ntp"></a>

```java
public java.util.List<java.lang.String> getNtp();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#ntp DatabaseVmClusterNetwork#ntp}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.timeouts"></a>

```java
public DatabaseVmClusterNetworkTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts">DatabaseVmClusterNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#timeouts DatabaseVmClusterNetwork#timeouts}

---

##### `validateVmClusterNetwork`<sup>Optional</sup> <a name="validateVmClusterNetwork" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.validateVmClusterNetwork"></a>

```java
public java.lang.Object getValidateVmClusterNetwork();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#validate_vm_cluster_network DatabaseVmClusterNetwork#validate_vm_cluster_network}.

---

### DatabaseVmClusterNetworkDrScans <a name="DatabaseVmClusterNetworkDrScans" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_network.DatabaseVmClusterNetworkDrScans;

DatabaseVmClusterNetworkDrScans.builder()
    .hostname(java.lang.String)
    .ips(java.util.List<java.lang.String>)
    .scanListenerPortTcp(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#hostname DatabaseVmClusterNetwork#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans.property.ips">ips</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#ips DatabaseVmClusterNetwork#ips}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans.property.scanListenerPortTcp">scanListenerPortTcp</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#scan_listener_port_tcp DatabaseVmClusterNetwork#scan_listener_port_tcp}. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#hostname DatabaseVmClusterNetwork#hostname}.

---

##### `ips`<sup>Required</sup> <a name="ips" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans.property.ips"></a>

```java
public java.util.List<java.lang.String> getIps();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#ips DatabaseVmClusterNetwork#ips}.

---

##### `scanListenerPortTcp`<sup>Required</sup> <a name="scanListenerPortTcp" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans.property.scanListenerPortTcp"></a>

```java
public java.lang.Number getScanListenerPortTcp();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#scan_listener_port_tcp DatabaseVmClusterNetwork#scan_listener_port_tcp}.

---

### DatabaseVmClusterNetworkScans <a name="DatabaseVmClusterNetworkScans" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_network.DatabaseVmClusterNetworkScans;

DatabaseVmClusterNetworkScans.builder()
    .hostname(java.lang.String)
    .ips(java.util.List<java.lang.String>)
//  .port(java.lang.Number)
//  .scanListenerPortTcp(java.lang.Number)
//  .scanListenerPortTcpSsl(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#hostname DatabaseVmClusterNetwork#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans.property.ips">ips</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#ips DatabaseVmClusterNetwork#ips}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#port DatabaseVmClusterNetwork#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans.property.scanListenerPortTcp">scanListenerPortTcp</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#scan_listener_port_tcp DatabaseVmClusterNetwork#scan_listener_port_tcp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans.property.scanListenerPortTcpSsl">scanListenerPortTcpSsl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#scan_listener_port_tcp_ssl DatabaseVmClusterNetwork#scan_listener_port_tcp_ssl}. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#hostname DatabaseVmClusterNetwork#hostname}.

---

##### `ips`<sup>Required</sup> <a name="ips" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans.property.ips"></a>

```java
public java.util.List<java.lang.String> getIps();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#ips DatabaseVmClusterNetwork#ips}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#port DatabaseVmClusterNetwork#port}.

---

##### `scanListenerPortTcp`<sup>Optional</sup> <a name="scanListenerPortTcp" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans.property.scanListenerPortTcp"></a>

```java
public java.lang.Number getScanListenerPortTcp();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#scan_listener_port_tcp DatabaseVmClusterNetwork#scan_listener_port_tcp}.

---

##### `scanListenerPortTcpSsl`<sup>Optional</sup> <a name="scanListenerPortTcpSsl" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans.property.scanListenerPortTcpSsl"></a>

```java
public java.lang.Number getScanListenerPortTcpSsl();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#scan_listener_port_tcp_ssl DatabaseVmClusterNetwork#scan_listener_port_tcp_ssl}.

---

### DatabaseVmClusterNetworkTimeouts <a name="DatabaseVmClusterNetworkTimeouts" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_network.DatabaseVmClusterNetworkTimeouts;

DatabaseVmClusterNetworkTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#create DatabaseVmClusterNetwork#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#delete DatabaseVmClusterNetwork#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#update DatabaseVmClusterNetwork#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#create DatabaseVmClusterNetwork#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#delete DatabaseVmClusterNetwork#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#update DatabaseVmClusterNetwork#update}.

---

### DatabaseVmClusterNetworkVmNetworks <a name="DatabaseVmClusterNetworkVmNetworks" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_network.DatabaseVmClusterNetworkVmNetworks;

DatabaseVmClusterNetworkVmNetworks.builder()
    .networkType(java.lang.String)
    .nodes(IResolvable)
    .nodes(java.util.List<DatabaseVmClusterNetworkVmNetworksNodes>)
//  .domainName(java.lang.String)
//  .gateway(java.lang.String)
//  .netmask(java.lang.String)
//  .vlanId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks.property.networkType">networkType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#network_type DatabaseVmClusterNetwork#network_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks.property.nodes">nodes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes">DatabaseVmClusterNetworkVmNetworksNodes</a>></code> | nodes block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks.property.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#domain_name DatabaseVmClusterNetwork#domain_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks.property.gateway">gateway</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#gateway DatabaseVmClusterNetwork#gateway}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks.property.netmask">netmask</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#netmask DatabaseVmClusterNetwork#netmask}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks.property.vlanId">vlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#vlan_id DatabaseVmClusterNetwork#vlan_id}. |

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#network_type DatabaseVmClusterNetwork#network_type}.

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks.property.nodes"></a>

```java
public java.lang.Object getNodes();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes">DatabaseVmClusterNetworkVmNetworksNodes</a>>

nodes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#nodes DatabaseVmClusterNetwork#nodes}

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#domain_name DatabaseVmClusterNetwork#domain_name}.

---

##### `gateway`<sup>Optional</sup> <a name="gateway" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks.property.gateway"></a>

```java
public java.lang.String getGateway();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#gateway DatabaseVmClusterNetwork#gateway}.

---

##### `netmask`<sup>Optional</sup> <a name="netmask" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks.property.netmask"></a>

```java
public java.lang.String getNetmask();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#netmask DatabaseVmClusterNetwork#netmask}.

---

##### `vlanId`<sup>Optional</sup> <a name="vlanId" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks.property.vlanId"></a>

```java
public java.lang.String getVlanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#vlan_id DatabaseVmClusterNetwork#vlan_id}.

---

### DatabaseVmClusterNetworkVmNetworksNodes <a name="DatabaseVmClusterNetworkVmNetworksNodes" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_network.DatabaseVmClusterNetworkVmNetworksNodes;

DatabaseVmClusterNetworkVmNetworksNodes.builder()
    .hostname(java.lang.String)
    .ip(java.lang.String)
//  .dbServerId(java.lang.String)
//  .state(java.lang.String)
//  .vip(java.lang.String)
//  .vipHostname(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#hostname DatabaseVmClusterNetwork#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes.property.ip">ip</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#ip DatabaseVmClusterNetwork#ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes.property.dbServerId">dbServerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#db_server_id DatabaseVmClusterNetwork#db_server_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#state DatabaseVmClusterNetwork#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes.property.vip">vip</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#vip DatabaseVmClusterNetwork#vip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes.property.vipHostname">vipHostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#vip_hostname DatabaseVmClusterNetwork#vip_hostname}. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#hostname DatabaseVmClusterNetwork#hostname}.

---

##### `ip`<sup>Required</sup> <a name="ip" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#ip DatabaseVmClusterNetwork#ip}.

---

##### `dbServerId`<sup>Optional</sup> <a name="dbServerId" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes.property.dbServerId"></a>

```java
public java.lang.String getDbServerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#db_server_id DatabaseVmClusterNetwork#db_server_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#state DatabaseVmClusterNetwork#state}.

---

##### `vip`<sup>Optional</sup> <a name="vip" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes.property.vip"></a>

```java
public java.lang.String getVip();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#vip DatabaseVmClusterNetwork#vip}.

---

##### `vipHostname`<sup>Optional</sup> <a name="vipHostname" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes.property.vipHostname"></a>

```java
public java.lang.String getVipHostname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#vip_hostname DatabaseVmClusterNetwork#vip_hostname}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseVmClusterNetworkDrScansList <a name="DatabaseVmClusterNetworkDrScansList" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_network.DatabaseVmClusterNetworkDrScansList;

new DatabaseVmClusterNetworkDrScansList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.get"></a>

```java
public DatabaseVmClusterNetworkDrScansOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans">DatabaseVmClusterNetworkDrScans</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans">DatabaseVmClusterNetworkDrScans</a>>

---


### DatabaseVmClusterNetworkDrScansOutputReference <a name="DatabaseVmClusterNetworkDrScansOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_network.DatabaseVmClusterNetworkDrScansOutputReference;

new DatabaseVmClusterNetworkDrScansOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.ipsInput">ipsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.scanListenerPortTcpInput">scanListenerPortTcpInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.ips">ips</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.scanListenerPortTcp">scanListenerPortTcp</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans">DatabaseVmClusterNetworkDrScans</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `ipsInput`<sup>Optional</sup> <a name="ipsInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.ipsInput"></a>

```java
public java.util.List<java.lang.String> getIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scanListenerPortTcpInput`<sup>Optional</sup> <a name="scanListenerPortTcpInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.scanListenerPortTcpInput"></a>

```java
public java.lang.Number getScanListenerPortTcpInput();
```

- *Type:* java.lang.Number

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `ips`<sup>Required</sup> <a name="ips" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.ips"></a>

```java
public java.util.List<java.lang.String> getIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scanListenerPortTcp`<sup>Required</sup> <a name="scanListenerPortTcp" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.scanListenerPortTcp"></a>

```java
public java.lang.Number getScanListenerPortTcp();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans">DatabaseVmClusterNetworkDrScans</a>

---


### DatabaseVmClusterNetworkScansList <a name="DatabaseVmClusterNetworkScansList" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_network.DatabaseVmClusterNetworkScansList;

new DatabaseVmClusterNetworkScansList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.get"></a>

```java
public DatabaseVmClusterNetworkScansOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans">DatabaseVmClusterNetworkScans</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans">DatabaseVmClusterNetworkScans</a>>

---


### DatabaseVmClusterNetworkScansOutputReference <a name="DatabaseVmClusterNetworkScansOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_network.DatabaseVmClusterNetworkScansOutputReference;

new DatabaseVmClusterNetworkScansOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.resetScanListenerPortTcp">resetScanListenerPortTcp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.resetScanListenerPortTcpSsl">resetScanListenerPortTcpSsl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetScanListenerPortTcp` <a name="resetScanListenerPortTcp" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.resetScanListenerPortTcp"></a>

```java
public void resetScanListenerPortTcp()
```

##### `resetScanListenerPortTcpSsl` <a name="resetScanListenerPortTcpSsl" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.resetScanListenerPortTcpSsl"></a>

```java
public void resetScanListenerPortTcpSsl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.ipsInput">ipsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.scanListenerPortTcpInput">scanListenerPortTcpInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.scanListenerPortTcpSslInput">scanListenerPortTcpSslInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.ips">ips</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.scanListenerPortTcp">scanListenerPortTcp</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.scanListenerPortTcpSsl">scanListenerPortTcpSsl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans">DatabaseVmClusterNetworkScans</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `ipsInput`<sup>Optional</sup> <a name="ipsInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.ipsInput"></a>

```java
public java.util.List<java.lang.String> getIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `scanListenerPortTcpInput`<sup>Optional</sup> <a name="scanListenerPortTcpInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.scanListenerPortTcpInput"></a>

```java
public java.lang.Number getScanListenerPortTcpInput();
```

- *Type:* java.lang.Number

---

##### `scanListenerPortTcpSslInput`<sup>Optional</sup> <a name="scanListenerPortTcpSslInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.scanListenerPortTcpSslInput"></a>

```java
public java.lang.Number getScanListenerPortTcpSslInput();
```

- *Type:* java.lang.Number

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `ips`<sup>Required</sup> <a name="ips" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.ips"></a>

```java
public java.util.List<java.lang.String> getIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `scanListenerPortTcp`<sup>Required</sup> <a name="scanListenerPortTcp" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.scanListenerPortTcp"></a>

```java
public java.lang.Number getScanListenerPortTcp();
```

- *Type:* java.lang.Number

---

##### `scanListenerPortTcpSsl`<sup>Required</sup> <a name="scanListenerPortTcpSsl" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.scanListenerPortTcpSsl"></a>

```java
public java.lang.Number getScanListenerPortTcpSsl();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans">DatabaseVmClusterNetworkScans</a>

---


### DatabaseVmClusterNetworkTimeoutsOutputReference <a name="DatabaseVmClusterNetworkTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_network.DatabaseVmClusterNetworkTimeoutsOutputReference;

new DatabaseVmClusterNetworkTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts">DatabaseVmClusterNetworkTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts">DatabaseVmClusterNetworkTimeouts</a>

---


### DatabaseVmClusterNetworkVmNetworksList <a name="DatabaseVmClusterNetworkVmNetworksList" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_network.DatabaseVmClusterNetworkVmNetworksList;

new DatabaseVmClusterNetworkVmNetworksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.get"></a>

```java
public DatabaseVmClusterNetworkVmNetworksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks">DatabaseVmClusterNetworkVmNetworks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks">DatabaseVmClusterNetworkVmNetworks</a>>

---


### DatabaseVmClusterNetworkVmNetworksNodesList <a name="DatabaseVmClusterNetworkVmNetworksNodesList" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_network.DatabaseVmClusterNetworkVmNetworksNodesList;

new DatabaseVmClusterNetworkVmNetworksNodesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.get"></a>

```java
public DatabaseVmClusterNetworkVmNetworksNodesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes">DatabaseVmClusterNetworkVmNetworksNodes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes">DatabaseVmClusterNetworkVmNetworksNodes</a>>

---


### DatabaseVmClusterNetworkVmNetworksNodesOutputReference <a name="DatabaseVmClusterNetworkVmNetworksNodesOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_network.DatabaseVmClusterNetworkVmNetworksNodesOutputReference;

new DatabaseVmClusterNetworkVmNetworksNodesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.resetDbServerId">resetDbServerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.resetVip">resetVip</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.resetVipHostname">resetVipHostname</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDbServerId` <a name="resetDbServerId" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.resetDbServerId"></a>

```java
public void resetDbServerId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.resetState"></a>

```java
public void resetState()
```

##### `resetVip` <a name="resetVip" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.resetVip"></a>

```java
public void resetVip()
```

##### `resetVipHostname` <a name="resetVipHostname" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.resetVipHostname"></a>

```java
public void resetVipHostname()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.dbServerIdInput">dbServerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.ipInput">ipInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.vipHostnameInput">vipHostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.vipInput">vipInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.dbServerId">dbServerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.ip">ip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.vip">vip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.vipHostname">vipHostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes">DatabaseVmClusterNetworkVmNetworksNodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dbServerIdInput`<sup>Optional</sup> <a name="dbServerIdInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.dbServerIdInput"></a>

```java
public java.lang.String getDbServerIdInput();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.ipInput"></a>

```java
public java.lang.String getIpInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `vipHostnameInput`<sup>Optional</sup> <a name="vipHostnameInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.vipHostnameInput"></a>

```java
public java.lang.String getVipHostnameInput();
```

- *Type:* java.lang.String

---

##### `vipInput`<sup>Optional</sup> <a name="vipInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.vipInput"></a>

```java
public java.lang.String getVipInput();
```

- *Type:* java.lang.String

---

##### `dbServerId`<sup>Required</sup> <a name="dbServerId" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.dbServerId"></a>

```java
public java.lang.String getDbServerId();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `ip`<sup>Required</sup> <a name="ip" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `vip`<sup>Required</sup> <a name="vip" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.vip"></a>

```java
public java.lang.String getVip();
```

- *Type:* java.lang.String

---

##### `vipHostname`<sup>Required</sup> <a name="vipHostname" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.vipHostname"></a>

```java
public java.lang.String getVipHostname();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes">DatabaseVmClusterNetworkVmNetworksNodes</a>

---


### DatabaseVmClusterNetworkVmNetworksOutputReference <a name="DatabaseVmClusterNetworkVmNetworksOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_vm_cluster_network.DatabaseVmClusterNetworkVmNetworksOutputReference;

new DatabaseVmClusterNetworkVmNetworksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.putNodes">putNodes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.resetDomainName">resetDomainName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.resetGateway">resetGateway</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.resetNetmask">resetNetmask</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.resetVlanId">resetVlanId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNodes` <a name="putNodes" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.putNodes"></a>

```java
public void putNodes(IResolvable OR java.util.List<DatabaseVmClusterNetworkVmNetworksNodes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.putNodes.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes">DatabaseVmClusterNetworkVmNetworksNodes</a>>

---

##### `resetDomainName` <a name="resetDomainName" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.resetDomainName"></a>

```java
public void resetDomainName()
```

##### `resetGateway` <a name="resetGateway" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.resetGateway"></a>

```java
public void resetGateway()
```

##### `resetNetmask` <a name="resetNetmask" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.resetNetmask"></a>

```java
public void resetNetmask()
```

##### `resetVlanId` <a name="resetVlanId" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.resetVlanId"></a>

```java
public void resetVlanId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.nodes">nodes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList">DatabaseVmClusterNetworkVmNetworksNodesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.gatewayInput">gatewayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.netmaskInput">netmaskInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.networkTypeInput">networkTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.nodesInput">nodesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes">DatabaseVmClusterNetworkVmNetworksNodes</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.vlanIdInput">vlanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.gateway">gateway</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.netmask">netmask</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.networkType">networkType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.vlanId">vlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks">DatabaseVmClusterNetworkVmNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.nodes"></a>

```java
public DatabaseVmClusterNetworkVmNetworksNodesList getNodes();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList">DatabaseVmClusterNetworkVmNetworksNodesList</a>

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `gatewayInput`<sup>Optional</sup> <a name="gatewayInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.gatewayInput"></a>

```java
public java.lang.String getGatewayInput();
```

- *Type:* java.lang.String

---

##### `netmaskInput`<sup>Optional</sup> <a name="netmaskInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.netmaskInput"></a>

```java
public java.lang.String getNetmaskInput();
```

- *Type:* java.lang.String

---

##### `networkTypeInput`<sup>Optional</sup> <a name="networkTypeInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.networkTypeInput"></a>

```java
public java.lang.String getNetworkTypeInput();
```

- *Type:* java.lang.String

---

##### `nodesInput`<sup>Optional</sup> <a name="nodesInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.nodesInput"></a>

```java
public java.lang.Object getNodesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes">DatabaseVmClusterNetworkVmNetworksNodes</a>>

---

##### `vlanIdInput`<sup>Optional</sup> <a name="vlanIdInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.vlanIdInput"></a>

```java
public java.lang.String getVlanIdInput();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.gateway"></a>

```java
public java.lang.String getGateway();
```

- *Type:* java.lang.String

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.netmask"></a>

```java
public java.lang.String getNetmask();
```

- *Type:* java.lang.String

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.vlanId"></a>

```java
public java.lang.String getVlanId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks">DatabaseVmClusterNetworkVmNetworks</a>

---



