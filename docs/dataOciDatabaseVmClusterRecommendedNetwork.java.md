# `dataOciDatabaseVmClusterRecommendedNetwork` Submodule <a name="`dataOciDatabaseVmClusterRecommendedNetwork` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseVmClusterRecommendedNetwork <a name="DataOciDatabaseVmClusterRecommendedNetwork" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network oci_database_vm_cluster_recommended_network}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_recommended_network.DataOciDatabaseVmClusterRecommendedNetwork;

DataOciDatabaseVmClusterRecommendedNetwork.Builder.create(Construct scope, java.lang.String id)
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
    .networks(IResolvable)
    .networks(java.util.List<DataOciDatabaseVmClusterRecommendedNetworkNetworks>)
//  .dbServers(java.util.List<java.lang.String>)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .dns(java.util.List<java.lang.String>)
//  .drScanListenerPortTcp(java.lang.Number)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .ntp(java.util.List<java.lang.String>)
//  .scanListenerPortTcp(java.lang.Number)
//  .scanListenerPortTcpSsl(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#compartment_id DataOciDatabaseVmClusterRecommendedNetwork#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#display_name DataOciDatabaseVmClusterRecommendedNetwork#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.exadataInfrastructureId">exadataInfrastructureId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#exadata_infrastructure_id DataOciDatabaseVmClusterRecommendedNetwork#exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.networks">networks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks">DataOciDatabaseVmClusterRecommendedNetworkNetworks</a>></code> | networks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.dbServers">dbServers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#db_servers DataOciDatabaseVmClusterRecommendedNetwork#db_servers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#defined_tags DataOciDatabaseVmClusterRecommendedNetwork#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.dns">dns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#dns DataOciDatabaseVmClusterRecommendedNetwork#dns}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.drScanListenerPortTcp">drScanListenerPortTcp</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#dr_scan_listener_port_tcp DataOciDatabaseVmClusterRecommendedNetwork#dr_scan_listener_port_tcp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#freeform_tags DataOciDatabaseVmClusterRecommendedNetwork#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#id DataOciDatabaseVmClusterRecommendedNetwork#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.ntp">ntp</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#ntp DataOciDatabaseVmClusterRecommendedNetwork#ntp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.scanListenerPortTcp">scanListenerPortTcp</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#scan_listener_port_tcp DataOciDatabaseVmClusterRecommendedNetwork#scan_listener_port_tcp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.scanListenerPortTcpSsl">scanListenerPortTcpSsl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#scan_listener_port_tcp_ssl DataOciDatabaseVmClusterRecommendedNetwork#scan_listener_port_tcp_ssl}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#compartment_id DataOciDatabaseVmClusterRecommendedNetwork#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#display_name DataOciDatabaseVmClusterRecommendedNetwork#display_name}.

---

##### `exadataInfrastructureId`<sup>Required</sup> <a name="exadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.exadataInfrastructureId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#exadata_infrastructure_id DataOciDatabaseVmClusterRecommendedNetwork#exadata_infrastructure_id}.

---

##### `networks`<sup>Required</sup> <a name="networks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.networks"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks">DataOciDatabaseVmClusterRecommendedNetworkNetworks</a>>

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#networks DataOciDatabaseVmClusterRecommendedNetwork#networks}

---

##### `dbServers`<sup>Optional</sup> <a name="dbServers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.dbServers"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#db_servers DataOciDatabaseVmClusterRecommendedNetwork#db_servers}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#defined_tags DataOciDatabaseVmClusterRecommendedNetwork#defined_tags}.

---

##### `dns`<sup>Optional</sup> <a name="dns" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.dns"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#dns DataOciDatabaseVmClusterRecommendedNetwork#dns}.

---

##### `drScanListenerPortTcp`<sup>Optional</sup> <a name="drScanListenerPortTcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.drScanListenerPortTcp"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#dr_scan_listener_port_tcp DataOciDatabaseVmClusterRecommendedNetwork#dr_scan_listener_port_tcp}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#freeform_tags DataOciDatabaseVmClusterRecommendedNetwork#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#id DataOciDatabaseVmClusterRecommendedNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ntp`<sup>Optional</sup> <a name="ntp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.ntp"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#ntp DataOciDatabaseVmClusterRecommendedNetwork#ntp}.

---

##### `scanListenerPortTcp`<sup>Optional</sup> <a name="scanListenerPortTcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.scanListenerPortTcp"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#scan_listener_port_tcp DataOciDatabaseVmClusterRecommendedNetwork#scan_listener_port_tcp}.

---

##### `scanListenerPortTcpSsl`<sup>Optional</sup> <a name="scanListenerPortTcpSsl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.scanListenerPortTcpSsl"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#scan_listener_port_tcp_ssl DataOciDatabaseVmClusterRecommendedNetwork#scan_listener_port_tcp_ssl}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.putNetworks">putNetworks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetDbServers">resetDbServers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetDns">resetDns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetDrScanListenerPortTcp">resetDrScanListenerPortTcp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetNtp">resetNtp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetScanListenerPortTcp">resetScanListenerPortTcp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetScanListenerPortTcpSsl">resetScanListenerPortTcpSsl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putNetworks` <a name="putNetworks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.putNetworks"></a>

```java
public void putNetworks(IResolvable OR java.util.List<DataOciDatabaseVmClusterRecommendedNetworkNetworks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.putNetworks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks">DataOciDatabaseVmClusterRecommendedNetworkNetworks</a>>

---

##### `resetDbServers` <a name="resetDbServers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetDbServers"></a>

```java
public void resetDbServers()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDns` <a name="resetDns" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetDns"></a>

```java
public void resetDns()
```

##### `resetDrScanListenerPortTcp` <a name="resetDrScanListenerPortTcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetDrScanListenerPortTcp"></a>

```java
public void resetDrScanListenerPortTcp()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetId"></a>

```java
public void resetId()
```

##### `resetNtp` <a name="resetNtp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetNtp"></a>

```java
public void resetNtp()
```

##### `resetScanListenerPortTcp` <a name="resetScanListenerPortTcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetScanListenerPortTcp"></a>

```java
public void resetScanListenerPortTcp()
```

##### `resetScanListenerPortTcpSsl` <a name="resetScanListenerPortTcpSsl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetScanListenerPortTcpSsl"></a>

```java
public void resetScanListenerPortTcpSsl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseVmClusterRecommendedNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_recommended_network.DataOciDatabaseVmClusterRecommendedNetwork;

DataOciDatabaseVmClusterRecommendedNetwork.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_recommended_network.DataOciDatabaseVmClusterRecommendedNetwork;

DataOciDatabaseVmClusterRecommendedNetwork.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_recommended_network.DataOciDatabaseVmClusterRecommendedNetwork;

DataOciDatabaseVmClusterRecommendedNetwork.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_recommended_network.DataOciDatabaseVmClusterRecommendedNetwork;

DataOciDatabaseVmClusterRecommendedNetwork.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatabaseVmClusterRecommendedNetwork.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatabaseVmClusterRecommendedNetwork resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatabaseVmClusterRecommendedNetwork to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatabaseVmClusterRecommendedNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseVmClusterRecommendedNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.drScans">drScans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList">DataOciDatabaseVmClusterRecommendedNetworkDrScansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.networks">networks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList">DataOciDatabaseVmClusterRecommendedNetworkNetworksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.scans">scans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList">DataOciDatabaseVmClusterRecommendedNetworkScansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.vmNetworks">vmNetworks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList">DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.dbServersInput">dbServersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.dnsInput">dnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.drScanListenerPortTcpInput">drScanListenerPortTcpInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.exadataInfrastructureIdInput">exadataInfrastructureIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.networksInput">networksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks">DataOciDatabaseVmClusterRecommendedNetworkNetworks</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.ntpInput">ntpInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.scanListenerPortTcpInput">scanListenerPortTcpInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.scanListenerPortTcpSslInput">scanListenerPortTcpSslInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.dbServers">dbServers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.dns">dns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.drScanListenerPortTcp">drScanListenerPortTcp</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.exadataInfrastructureId">exadataInfrastructureId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.ntp">ntp</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.scanListenerPortTcp">scanListenerPortTcp</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.scanListenerPortTcpSsl">scanListenerPortTcpSsl</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `drScans`<sup>Required</sup> <a name="drScans" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.drScans"></a>

```java
public DataOciDatabaseVmClusterRecommendedNetworkDrScansList getDrScans();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList">DataOciDatabaseVmClusterRecommendedNetworkDrScansList</a>

---

##### `networks`<sup>Required</sup> <a name="networks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.networks"></a>

```java
public DataOciDatabaseVmClusterRecommendedNetworkNetworksList getNetworks();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList">DataOciDatabaseVmClusterRecommendedNetworkNetworksList</a>

---

##### `scans`<sup>Required</sup> <a name="scans" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.scans"></a>

```java
public DataOciDatabaseVmClusterRecommendedNetworkScansList getScans();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList">DataOciDatabaseVmClusterRecommendedNetworkScansList</a>

---

##### `vmNetworks`<sup>Required</sup> <a name="vmNetworks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.vmNetworks"></a>

```java
public DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList getVmNetworks();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList">DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `dbServersInput`<sup>Optional</sup> <a name="dbServersInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.dbServersInput"></a>

```java
public java.util.List<java.lang.String> getDbServersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `dnsInput`<sup>Optional</sup> <a name="dnsInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.dnsInput"></a>

```java
public java.util.List<java.lang.String> getDnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `drScanListenerPortTcpInput`<sup>Optional</sup> <a name="drScanListenerPortTcpInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.drScanListenerPortTcpInput"></a>

```java
public java.lang.Number getDrScanListenerPortTcpInput();
```

- *Type:* java.lang.Number

---

##### `exadataInfrastructureIdInput`<sup>Optional</sup> <a name="exadataInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.exadataInfrastructureIdInput"></a>

```java
public java.lang.String getExadataInfrastructureIdInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `networksInput`<sup>Optional</sup> <a name="networksInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.networksInput"></a>

```java
public java.lang.Object getNetworksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks">DataOciDatabaseVmClusterRecommendedNetworkNetworks</a>>

---

##### `ntpInput`<sup>Optional</sup> <a name="ntpInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.ntpInput"></a>

```java
public java.util.List<java.lang.String> getNtpInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scanListenerPortTcpInput`<sup>Optional</sup> <a name="scanListenerPortTcpInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.scanListenerPortTcpInput"></a>

```java
public java.lang.Number getScanListenerPortTcpInput();
```

- *Type:* java.lang.Number

---

##### `scanListenerPortTcpSslInput`<sup>Optional</sup> <a name="scanListenerPortTcpSslInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.scanListenerPortTcpSslInput"></a>

```java
public java.lang.Number getScanListenerPortTcpSslInput();
```

- *Type:* java.lang.Number

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `dbServers`<sup>Required</sup> <a name="dbServers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.dbServers"></a>

```java
public java.util.List<java.lang.String> getDbServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `dns`<sup>Required</sup> <a name="dns" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.dns"></a>

```java
public java.util.List<java.lang.String> getDns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `drScanListenerPortTcp`<sup>Required</sup> <a name="drScanListenerPortTcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.drScanListenerPortTcp"></a>

```java
public java.lang.Number getDrScanListenerPortTcp();
```

- *Type:* java.lang.Number

---

##### `exadataInfrastructureId`<sup>Required</sup> <a name="exadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.exadataInfrastructureId"></a>

```java
public java.lang.String getExadataInfrastructureId();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ntp`<sup>Required</sup> <a name="ntp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.ntp"></a>

```java
public java.util.List<java.lang.String> getNtp();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scanListenerPortTcp`<sup>Required</sup> <a name="scanListenerPortTcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.scanListenerPortTcp"></a>

```java
public java.lang.Number getScanListenerPortTcp();
```

- *Type:* java.lang.Number

---

##### `scanListenerPortTcpSsl`<sup>Required</sup> <a name="scanListenerPortTcpSsl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.scanListenerPortTcpSsl"></a>

```java
public java.lang.Number getScanListenerPortTcpSsl();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseVmClusterRecommendedNetworkConfig <a name="DataOciDatabaseVmClusterRecommendedNetworkConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_recommended_network.DataOciDatabaseVmClusterRecommendedNetworkConfig;

DataOciDatabaseVmClusterRecommendedNetworkConfig.builder()
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
    .networks(IResolvable)
    .networks(java.util.List<DataOciDatabaseVmClusterRecommendedNetworkNetworks>)
//  .dbServers(java.util.List<java.lang.String>)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .dns(java.util.List<java.lang.String>)
//  .drScanListenerPortTcp(java.lang.Number)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .ntp(java.util.List<java.lang.String>)
//  .scanListenerPortTcp(java.lang.Number)
//  .scanListenerPortTcpSsl(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#compartment_id DataOciDatabaseVmClusterRecommendedNetwork#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#display_name DataOciDatabaseVmClusterRecommendedNetwork#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.exadataInfrastructureId">exadataInfrastructureId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#exadata_infrastructure_id DataOciDatabaseVmClusterRecommendedNetwork#exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.networks">networks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks">DataOciDatabaseVmClusterRecommendedNetworkNetworks</a>></code> | networks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.dbServers">dbServers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#db_servers DataOciDatabaseVmClusterRecommendedNetwork#db_servers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#defined_tags DataOciDatabaseVmClusterRecommendedNetwork#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.dns">dns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#dns DataOciDatabaseVmClusterRecommendedNetwork#dns}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.drScanListenerPortTcp">drScanListenerPortTcp</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#dr_scan_listener_port_tcp DataOciDatabaseVmClusterRecommendedNetwork#dr_scan_listener_port_tcp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#freeform_tags DataOciDatabaseVmClusterRecommendedNetwork#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#id DataOciDatabaseVmClusterRecommendedNetwork#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.ntp">ntp</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#ntp DataOciDatabaseVmClusterRecommendedNetwork#ntp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.scanListenerPortTcp">scanListenerPortTcp</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#scan_listener_port_tcp DataOciDatabaseVmClusterRecommendedNetwork#scan_listener_port_tcp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.scanListenerPortTcpSsl">scanListenerPortTcpSsl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#scan_listener_port_tcp_ssl DataOciDatabaseVmClusterRecommendedNetwork#scan_listener_port_tcp_ssl}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#compartment_id DataOciDatabaseVmClusterRecommendedNetwork#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#display_name DataOciDatabaseVmClusterRecommendedNetwork#display_name}.

---

##### `exadataInfrastructureId`<sup>Required</sup> <a name="exadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.exadataInfrastructureId"></a>

```java
public java.lang.String getExadataInfrastructureId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#exadata_infrastructure_id DataOciDatabaseVmClusterRecommendedNetwork#exadata_infrastructure_id}.

---

##### `networks`<sup>Required</sup> <a name="networks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.networks"></a>

```java
public java.lang.Object getNetworks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks">DataOciDatabaseVmClusterRecommendedNetworkNetworks</a>>

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#networks DataOciDatabaseVmClusterRecommendedNetwork#networks}

---

##### `dbServers`<sup>Optional</sup> <a name="dbServers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.dbServers"></a>

```java
public java.util.List<java.lang.String> getDbServers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#db_servers DataOciDatabaseVmClusterRecommendedNetwork#db_servers}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#defined_tags DataOciDatabaseVmClusterRecommendedNetwork#defined_tags}.

---

##### `dns`<sup>Optional</sup> <a name="dns" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.dns"></a>

```java
public java.util.List<java.lang.String> getDns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#dns DataOciDatabaseVmClusterRecommendedNetwork#dns}.

---

##### `drScanListenerPortTcp`<sup>Optional</sup> <a name="drScanListenerPortTcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.drScanListenerPortTcp"></a>

```java
public java.lang.Number getDrScanListenerPortTcp();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#dr_scan_listener_port_tcp DataOciDatabaseVmClusterRecommendedNetwork#dr_scan_listener_port_tcp}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#freeform_tags DataOciDatabaseVmClusterRecommendedNetwork#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#id DataOciDatabaseVmClusterRecommendedNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ntp`<sup>Optional</sup> <a name="ntp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.ntp"></a>

```java
public java.util.List<java.lang.String> getNtp();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#ntp DataOciDatabaseVmClusterRecommendedNetwork#ntp}.

---

##### `scanListenerPortTcp`<sup>Optional</sup> <a name="scanListenerPortTcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.scanListenerPortTcp"></a>

```java
public java.lang.Number getScanListenerPortTcp();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#scan_listener_port_tcp DataOciDatabaseVmClusterRecommendedNetwork#scan_listener_port_tcp}.

---

##### `scanListenerPortTcpSsl`<sup>Optional</sup> <a name="scanListenerPortTcpSsl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.scanListenerPortTcpSsl"></a>

```java
public java.lang.Number getScanListenerPortTcpSsl();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#scan_listener_port_tcp_ssl DataOciDatabaseVmClusterRecommendedNetwork#scan_listener_port_tcp_ssl}.

---

### DataOciDatabaseVmClusterRecommendedNetworkDrScans <a name="DataOciDatabaseVmClusterRecommendedNetworkDrScans" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScans.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_recommended_network.DataOciDatabaseVmClusterRecommendedNetworkDrScans;

DataOciDatabaseVmClusterRecommendedNetworkDrScans.builder()
    .build();
```


### DataOciDatabaseVmClusterRecommendedNetworkNetworks <a name="DataOciDatabaseVmClusterRecommendedNetworkNetworks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_recommended_network.DataOciDatabaseVmClusterRecommendedNetworkNetworks;

DataOciDatabaseVmClusterRecommendedNetworkNetworks.builder()
    .cidr(java.lang.String)
    .domain(java.lang.String)
    .gateway(java.lang.String)
    .netmask(java.lang.String)
    .networkType(java.lang.String)
    .prefix(java.lang.String)
    .vlanId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.cidr">cidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#cidr DataOciDatabaseVmClusterRecommendedNetwork#cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#domain DataOciDatabaseVmClusterRecommendedNetwork#domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.gateway">gateway</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#gateway DataOciDatabaseVmClusterRecommendedNetwork#gateway}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.netmask">netmask</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#netmask DataOciDatabaseVmClusterRecommendedNetwork#netmask}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.networkType">networkType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#network_type DataOciDatabaseVmClusterRecommendedNetwork#network_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#prefix DataOciDatabaseVmClusterRecommendedNetwork#prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.vlanId">vlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#vlan_id DataOciDatabaseVmClusterRecommendedNetwork#vlan_id}. |

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#cidr DataOciDatabaseVmClusterRecommendedNetwork#cidr}.

---

##### `domain`<sup>Required</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#domain DataOciDatabaseVmClusterRecommendedNetwork#domain}.

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.gateway"></a>

```java
public java.lang.String getGateway();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#gateway DataOciDatabaseVmClusterRecommendedNetwork#gateway}.

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.netmask"></a>

```java
public java.lang.String getNetmask();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#netmask DataOciDatabaseVmClusterRecommendedNetwork#netmask}.

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#network_type DataOciDatabaseVmClusterRecommendedNetwork#network_type}.

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#prefix DataOciDatabaseVmClusterRecommendedNetwork#prefix}.

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.vlanId"></a>

```java
public java.lang.String getVlanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#vlan_id DataOciDatabaseVmClusterRecommendedNetwork#vlan_id}.

---

### DataOciDatabaseVmClusterRecommendedNetworkScans <a name="DataOciDatabaseVmClusterRecommendedNetworkScans" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScans.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_recommended_network.DataOciDatabaseVmClusterRecommendedNetworkScans;

DataOciDatabaseVmClusterRecommendedNetworkScans.builder()
    .build();
```


### DataOciDatabaseVmClusterRecommendedNetworkVmNetworks <a name="DataOciDatabaseVmClusterRecommendedNetworkVmNetworks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_recommended_network.DataOciDatabaseVmClusterRecommendedNetworkVmNetworks;

DataOciDatabaseVmClusterRecommendedNetworkVmNetworks.builder()
    .build();
```


### DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodes <a name="DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_recommended_network.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodes;

DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodes.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseVmClusterRecommendedNetworkDrScansList <a name="DataOciDatabaseVmClusterRecommendedNetworkDrScansList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_recommended_network.DataOciDatabaseVmClusterRecommendedNetworkDrScansList;

new DataOciDatabaseVmClusterRecommendedNetworkDrScansList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.get"></a>

```java
public DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference <a name="DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_recommended_network.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference;

new DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.ips">ips</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.scanListenerPortTcp">scanListenerPortTcp</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScans">DataOciDatabaseVmClusterRecommendedNetworkDrScans</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `ips`<sup>Required</sup> <a name="ips" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.ips"></a>

```java
public java.util.List<java.lang.String> getIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scanListenerPortTcp`<sup>Required</sup> <a name="scanListenerPortTcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.scanListenerPortTcp"></a>

```java
public java.lang.Number getScanListenerPortTcp();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseVmClusterRecommendedNetworkDrScans getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScans">DataOciDatabaseVmClusterRecommendedNetworkDrScans</a>

---


### DataOciDatabaseVmClusterRecommendedNetworkNetworksList <a name="DataOciDatabaseVmClusterRecommendedNetworkNetworksList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_recommended_network.DataOciDatabaseVmClusterRecommendedNetworkNetworksList;

new DataOciDatabaseVmClusterRecommendedNetworkNetworksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.get"></a>

```java
public DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks">DataOciDatabaseVmClusterRecommendedNetworkNetworks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks">DataOciDatabaseVmClusterRecommendedNetworkNetworks</a>>

---


### DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference <a name="DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_recommended_network.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference;

new DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.cidrInput">cidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.gatewayInput">gatewayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.netmaskInput">netmaskInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.networkTypeInput">networkTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.vlanIdInput">vlanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.cidr">cidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.gateway">gateway</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.netmask">netmask</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.networkType">networkType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.vlanId">vlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks">DataOciDatabaseVmClusterRecommendedNetworkNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.cidrInput"></a>

```java
public java.lang.String getCidrInput();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `gatewayInput`<sup>Optional</sup> <a name="gatewayInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.gatewayInput"></a>

```java
public java.lang.String getGatewayInput();
```

- *Type:* java.lang.String

---

##### `netmaskInput`<sup>Optional</sup> <a name="netmaskInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.netmaskInput"></a>

```java
public java.lang.String getNetmaskInput();
```

- *Type:* java.lang.String

---

##### `networkTypeInput`<sup>Optional</sup> <a name="networkTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.networkTypeInput"></a>

```java
public java.lang.String getNetworkTypeInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `vlanIdInput`<sup>Optional</sup> <a name="vlanIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.vlanIdInput"></a>

```java
public java.lang.String getVlanIdInput();
```

- *Type:* java.lang.String

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.gateway"></a>

```java
public java.lang.String getGateway();
```

- *Type:* java.lang.String

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.netmask"></a>

```java
public java.lang.String getNetmask();
```

- *Type:* java.lang.String

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.vlanId"></a>

```java
public java.lang.String getVlanId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks">DataOciDatabaseVmClusterRecommendedNetworkNetworks</a>

---


### DataOciDatabaseVmClusterRecommendedNetworkScansList <a name="DataOciDatabaseVmClusterRecommendedNetworkScansList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_recommended_network.DataOciDatabaseVmClusterRecommendedNetworkScansList;

new DataOciDatabaseVmClusterRecommendedNetworkScansList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.get"></a>

```java
public DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference <a name="DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_recommended_network.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference;

new DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.ips">ips</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.scanListenerPortTcp">scanListenerPortTcp</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.scanListenerPortTcpSsl">scanListenerPortTcpSsl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScans">DataOciDatabaseVmClusterRecommendedNetworkScans</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `ips`<sup>Required</sup> <a name="ips" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.ips"></a>

```java
public java.util.List<java.lang.String> getIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `scanListenerPortTcp`<sup>Required</sup> <a name="scanListenerPortTcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.scanListenerPortTcp"></a>

```java
public java.lang.Number getScanListenerPortTcp();
```

- *Type:* java.lang.Number

---

##### `scanListenerPortTcpSsl`<sup>Required</sup> <a name="scanListenerPortTcpSsl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.scanListenerPortTcpSsl"></a>

```java
public java.lang.Number getScanListenerPortTcpSsl();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseVmClusterRecommendedNetworkScans getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScans">DataOciDatabaseVmClusterRecommendedNetworkScans</a>

---


### DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList <a name="DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_recommended_network.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList;

new DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.get"></a>

```java
public DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList <a name="DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_recommended_network.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList;

new DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.get"></a>

```java
public DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference <a name="DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_recommended_network.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference;

new DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.dbServerId">dbServerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.ip">ip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.vip">vip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.vipHostname">vipHostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodes">DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dbServerId`<sup>Required</sup> <a name="dbServerId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.dbServerId"></a>

```java
public java.lang.String getDbServerId();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `ip`<sup>Required</sup> <a name="ip" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `vip`<sup>Required</sup> <a name="vip" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.vip"></a>

```java
public java.lang.String getVip();
```

- *Type:* java.lang.String

---

##### `vipHostname`<sup>Required</sup> <a name="vipHostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.vipHostname"></a>

```java
public java.lang.String getVipHostname();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodes getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodes">DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodes</a>

---


### DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference <a name="DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_recommended_network.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference;

new DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.gateway">gateway</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.netmask">netmask</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.networkType">networkType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.nodes">nodes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList">DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.vlanId">vlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworks">DataOciDatabaseVmClusterRecommendedNetworkVmNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.gateway"></a>

```java
public java.lang.String getGateway();
```

- *Type:* java.lang.String

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.netmask"></a>

```java
public java.lang.String getNetmask();
```

- *Type:* java.lang.String

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.nodes"></a>

```java
public DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList getNodes();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList">DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList</a>

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.vlanId"></a>

```java
public java.lang.String getVlanId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseVmClusterRecommendedNetworkVmNetworks getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworks">DataOciDatabaseVmClusterRecommendedNetworkVmNetworks</a>

---



