# `databaseDataGuardAssociation` Submodule <a name="`databaseDataGuardAssociation` Submodule" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseDataGuardAssociation <a name="DatabaseDataGuardAssociation" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association oci_database_data_guard_association}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_data_guard_association.DatabaseDataGuardAssociation;

DatabaseDataGuardAssociation.Builder.create(Construct scope, java.lang.String id)
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
    .creationType(java.lang.String)
    .databaseAdminPassword(java.lang.String)
    .databaseId(java.lang.String)
    .deleteStandbyDbHomeOnDelete(java.lang.String)
    .protectionMode(java.lang.String)
    .transportType(java.lang.String)
//  .availabilityDomain(java.lang.String)
//  .backupNetworkNsgIds(java.util.List<java.lang.String>)
//  .cpuCoreCount(java.lang.Number)
//  .createAsync(java.lang.Boolean)
//  .createAsync(IResolvable)
//  .databaseDefinedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .databaseFreeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .databaseSoftwareImageId(java.lang.String)
//  .dataCollectionOptions(DatabaseDataGuardAssociationDataCollectionOptions)
//  .dbSystemDefinedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .dbSystemFreeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .dbSystemSecurityAttributes(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .domain(java.lang.String)
//  .faultDomains(java.util.List<java.lang.String>)
//  .hostname(java.lang.String)
//  .id(java.lang.String)
//  .isActiveDataGuardEnabled(java.lang.Boolean)
//  .isActiveDataGuardEnabled(IResolvable)
//  .licenseModel(java.lang.String)
//  .nodeCount(java.lang.Number)
//  .nsgIds(java.util.List<java.lang.String>)
//  .peerDbHomeId(java.lang.String)
//  .peerDbSystemId(java.lang.String)
//  .peerDbUniqueName(java.lang.String)
//  .peerSidPrefix(java.lang.String)
//  .peerVmClusterId(java.lang.String)
//  .privateIp(java.lang.String)
//  .shape(java.lang.String)
//  .storageVolumePerformanceMode(java.lang.String)
//  .subnetId(java.lang.String)
//  .timeouts(DatabaseDataGuardAssociationTimeouts)
//  .timeZone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.creationType">creationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#creation_type DatabaseDataGuardAssociation#creation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.databaseAdminPassword">databaseAdminPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_admin_password DatabaseDataGuardAssociation#database_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.databaseId">databaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_id DatabaseDataGuardAssociation#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.deleteStandbyDbHomeOnDelete">deleteStandbyDbHomeOnDelete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#delete_standby_db_home_on_delete DatabaseDataGuardAssociation#delete_standby_db_home_on_delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.protectionMode">protectionMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#protection_mode DatabaseDataGuardAssociation#protection_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.transportType">transportType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#transport_type DatabaseDataGuardAssociation#transport_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#availability_domain DatabaseDataGuardAssociation#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.backupNetworkNsgIds">backupNetworkNsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#backup_network_nsg_ids DatabaseDataGuardAssociation#backup_network_nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#cpu_core_count DatabaseDataGuardAssociation#cpu_core_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.createAsync">createAsync</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#create_async DatabaseDataGuardAssociation#create_async}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.databaseDefinedTags">databaseDefinedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_defined_tags DatabaseDataGuardAssociation#database_defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.databaseFreeformTags">databaseFreeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_freeform_tags DatabaseDataGuardAssociation#database_freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.databaseSoftwareImageId">databaseSoftwareImageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_software_image_id DatabaseDataGuardAssociation#database_software_image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.dataCollectionOptions">dataCollectionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions">DatabaseDataGuardAssociationDataCollectionOptions</a></code> | data_collection_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.dbSystemDefinedTags">dbSystemDefinedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#db_system_defined_tags DatabaseDataGuardAssociation#db_system_defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.dbSystemFreeformTags">dbSystemFreeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#db_system_freeform_tags DatabaseDataGuardAssociation#db_system_freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.dbSystemSecurityAttributes">dbSystemSecurityAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#db_system_security_attributes DatabaseDataGuardAssociation#db_system_security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#display_name DatabaseDataGuardAssociation#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#domain DatabaseDataGuardAssociation#domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.faultDomains">faultDomains</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#fault_domains DatabaseDataGuardAssociation#fault_domains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.hostname">hostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#hostname DatabaseDataGuardAssociation#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#id DatabaseDataGuardAssociation#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.isActiveDataGuardEnabled">isActiveDataGuardEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_active_data_guard_enabled DatabaseDataGuardAssociation#is_active_data_guard_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#license_model DatabaseDataGuardAssociation#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#node_count DatabaseDataGuardAssociation#node_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#nsg_ids DatabaseDataGuardAssociation#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.peerDbHomeId">peerDbHomeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_db_home_id DatabaseDataGuardAssociation#peer_db_home_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.peerDbSystemId">peerDbSystemId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_db_system_id DatabaseDataGuardAssociation#peer_db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.peerDbUniqueName">peerDbUniqueName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_db_unique_name DatabaseDataGuardAssociation#peer_db_unique_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.peerSidPrefix">peerSidPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_sid_prefix DatabaseDataGuardAssociation#peer_sid_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.peerVmClusterId">peerVmClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_vm_cluster_id DatabaseDataGuardAssociation#peer_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.privateIp">privateIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#private_ip DatabaseDataGuardAssociation#private_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.shape">shape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#shape DatabaseDataGuardAssociation#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.storageVolumePerformanceMode">storageVolumePerformanceMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#storage_volume_performance_mode DatabaseDataGuardAssociation#storage_volume_performance_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#subnet_id DatabaseDataGuardAssociation#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts">DatabaseDataGuardAssociationTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#time_zone DatabaseDataGuardAssociation#time_zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `creationType`<sup>Required</sup> <a name="creationType" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.creationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#creation_type DatabaseDataGuardAssociation#creation_type}.

---

##### `databaseAdminPassword`<sup>Required</sup> <a name="databaseAdminPassword" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.databaseAdminPassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_admin_password DatabaseDataGuardAssociation#database_admin_password}.

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.databaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_id DatabaseDataGuardAssociation#database_id}.

---

##### `deleteStandbyDbHomeOnDelete`<sup>Required</sup> <a name="deleteStandbyDbHomeOnDelete" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.deleteStandbyDbHomeOnDelete"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#delete_standby_db_home_on_delete DatabaseDataGuardAssociation#delete_standby_db_home_on_delete}.

---

##### `protectionMode`<sup>Required</sup> <a name="protectionMode" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.protectionMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#protection_mode DatabaseDataGuardAssociation#protection_mode}.

---

##### `transportType`<sup>Required</sup> <a name="transportType" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.transportType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#transport_type DatabaseDataGuardAssociation#transport_type}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.availabilityDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#availability_domain DatabaseDataGuardAssociation#availability_domain}.

---

##### `backupNetworkNsgIds`<sup>Optional</sup> <a name="backupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.backupNetworkNsgIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#backup_network_nsg_ids DatabaseDataGuardAssociation#backup_network_nsg_ids}.

---

##### `cpuCoreCount`<sup>Optional</sup> <a name="cpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.cpuCoreCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#cpu_core_count DatabaseDataGuardAssociation#cpu_core_count}.

---

##### `createAsync`<sup>Optional</sup> <a name="createAsync" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.createAsync"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#create_async DatabaseDataGuardAssociation#create_async}.

---

##### `databaseDefinedTags`<sup>Optional</sup> <a name="databaseDefinedTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.databaseDefinedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_defined_tags DatabaseDataGuardAssociation#database_defined_tags}.

---

##### `databaseFreeformTags`<sup>Optional</sup> <a name="databaseFreeformTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.databaseFreeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_freeform_tags DatabaseDataGuardAssociation#database_freeform_tags}.

---

##### `databaseSoftwareImageId`<sup>Optional</sup> <a name="databaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.databaseSoftwareImageId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_software_image_id DatabaseDataGuardAssociation#database_software_image_id}.

---

##### `dataCollectionOptions`<sup>Optional</sup> <a name="dataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.dataCollectionOptions"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions">DatabaseDataGuardAssociationDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#data_collection_options DatabaseDataGuardAssociation#data_collection_options}

---

##### `dbSystemDefinedTags`<sup>Optional</sup> <a name="dbSystemDefinedTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.dbSystemDefinedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#db_system_defined_tags DatabaseDataGuardAssociation#db_system_defined_tags}.

---

##### `dbSystemFreeformTags`<sup>Optional</sup> <a name="dbSystemFreeformTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.dbSystemFreeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#db_system_freeform_tags DatabaseDataGuardAssociation#db_system_freeform_tags}.

---

##### `dbSystemSecurityAttributes`<sup>Optional</sup> <a name="dbSystemSecurityAttributes" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.dbSystemSecurityAttributes"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#db_system_security_attributes DatabaseDataGuardAssociation#db_system_security_attributes}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#display_name DatabaseDataGuardAssociation#display_name}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.domain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#domain DatabaseDataGuardAssociation#domain}.

---

##### `faultDomains`<sup>Optional</sup> <a name="faultDomains" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.faultDomains"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#fault_domains DatabaseDataGuardAssociation#fault_domains}.

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.hostname"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#hostname DatabaseDataGuardAssociation#hostname}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#id DatabaseDataGuardAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isActiveDataGuardEnabled`<sup>Optional</sup> <a name="isActiveDataGuardEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.isActiveDataGuardEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_active_data_guard_enabled DatabaseDataGuardAssociation#is_active_data_guard_enabled}.

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.licenseModel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#license_model DatabaseDataGuardAssociation#license_model}.

---

##### `nodeCount`<sup>Optional</sup> <a name="nodeCount" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.nodeCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#node_count DatabaseDataGuardAssociation#node_count}.

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.nsgIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#nsg_ids DatabaseDataGuardAssociation#nsg_ids}.

---

##### `peerDbHomeId`<sup>Optional</sup> <a name="peerDbHomeId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.peerDbHomeId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_db_home_id DatabaseDataGuardAssociation#peer_db_home_id}.

---

##### `peerDbSystemId`<sup>Optional</sup> <a name="peerDbSystemId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.peerDbSystemId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_db_system_id DatabaseDataGuardAssociation#peer_db_system_id}.

---

##### `peerDbUniqueName`<sup>Optional</sup> <a name="peerDbUniqueName" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.peerDbUniqueName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_db_unique_name DatabaseDataGuardAssociation#peer_db_unique_name}.

---

##### `peerSidPrefix`<sup>Optional</sup> <a name="peerSidPrefix" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.peerSidPrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_sid_prefix DatabaseDataGuardAssociation#peer_sid_prefix}.

---

##### `peerVmClusterId`<sup>Optional</sup> <a name="peerVmClusterId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.peerVmClusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_vm_cluster_id DatabaseDataGuardAssociation#peer_vm_cluster_id}.

---

##### `privateIp`<sup>Optional</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.privateIp"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#private_ip DatabaseDataGuardAssociation#private_ip}.

---

##### `shape`<sup>Optional</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.shape"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#shape DatabaseDataGuardAssociation#shape}.

---

##### `storageVolumePerformanceMode`<sup>Optional</sup> <a name="storageVolumePerformanceMode" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.storageVolumePerformanceMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#storage_volume_performance_mode DatabaseDataGuardAssociation#storage_volume_performance_mode}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#subnet_id DatabaseDataGuardAssociation#subnet_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts">DatabaseDataGuardAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#timeouts DatabaseDataGuardAssociation#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.timeZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#time_zone DatabaseDataGuardAssociation#time_zone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.putDataCollectionOptions">putDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetBackupNetworkNsgIds">resetBackupNetworkNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetCpuCoreCount">resetCpuCoreCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetCreateAsync">resetCreateAsync</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDatabaseDefinedTags">resetDatabaseDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDatabaseFreeformTags">resetDatabaseFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDatabaseSoftwareImageId">resetDatabaseSoftwareImageId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDataCollectionOptions">resetDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDbSystemDefinedTags">resetDbSystemDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDbSystemFreeformTags">resetDbSystemFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDbSystemSecurityAttributes">resetDbSystemSecurityAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetFaultDomains">resetFaultDomains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetIsActiveDataGuardEnabled">resetIsActiveDataGuardEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetLicenseModel">resetLicenseModel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetNodeCount">resetNodeCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetNsgIds">resetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerDbHomeId">resetPeerDbHomeId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerDbSystemId">resetPeerDbSystemId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerDbUniqueName">resetPeerDbUniqueName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerSidPrefix">resetPeerSidPrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerVmClusterId">resetPeerVmClusterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPrivateIp">resetPrivateIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetShape">resetShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetStorageVolumePerformanceMode">resetStorageVolumePerformanceMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataCollectionOptions` <a name="putDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.putDataCollectionOptions"></a>

```java
public void putDataCollectionOptions(DatabaseDataGuardAssociationDataCollectionOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.putDataCollectionOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions">DatabaseDataGuardAssociationDataCollectionOptions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.putTimeouts"></a>

```java
public void putTimeouts(DatabaseDataGuardAssociationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts">DatabaseDataGuardAssociationTimeouts</a>

---

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetAvailabilityDomain"></a>

```java
public void resetAvailabilityDomain()
```

##### `resetBackupNetworkNsgIds` <a name="resetBackupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetBackupNetworkNsgIds"></a>

```java
public void resetBackupNetworkNsgIds()
```

##### `resetCpuCoreCount` <a name="resetCpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetCpuCoreCount"></a>

```java
public void resetCpuCoreCount()
```

##### `resetCreateAsync` <a name="resetCreateAsync" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetCreateAsync"></a>

```java
public void resetCreateAsync()
```

##### `resetDatabaseDefinedTags` <a name="resetDatabaseDefinedTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDatabaseDefinedTags"></a>

```java
public void resetDatabaseDefinedTags()
```

##### `resetDatabaseFreeformTags` <a name="resetDatabaseFreeformTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDatabaseFreeformTags"></a>

```java
public void resetDatabaseFreeformTags()
```

##### `resetDatabaseSoftwareImageId` <a name="resetDatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDatabaseSoftwareImageId"></a>

```java
public void resetDatabaseSoftwareImageId()
```

##### `resetDataCollectionOptions` <a name="resetDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDataCollectionOptions"></a>

```java
public void resetDataCollectionOptions()
```

##### `resetDbSystemDefinedTags` <a name="resetDbSystemDefinedTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDbSystemDefinedTags"></a>

```java
public void resetDbSystemDefinedTags()
```

##### `resetDbSystemFreeformTags` <a name="resetDbSystemFreeformTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDbSystemFreeformTags"></a>

```java
public void resetDbSystemFreeformTags()
```

##### `resetDbSystemSecurityAttributes` <a name="resetDbSystemSecurityAttributes" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDbSystemSecurityAttributes"></a>

```java
public void resetDbSystemSecurityAttributes()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetDomain` <a name="resetDomain" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDomain"></a>

```java
public void resetDomain()
```

##### `resetFaultDomains` <a name="resetFaultDomains" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetFaultDomains"></a>

```java
public void resetFaultDomains()
```

##### `resetHostname` <a name="resetHostname" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetHostname"></a>

```java
public void resetHostname()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetId"></a>

```java
public void resetId()
```

##### `resetIsActiveDataGuardEnabled` <a name="resetIsActiveDataGuardEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetIsActiveDataGuardEnabled"></a>

```java
public void resetIsActiveDataGuardEnabled()
```

##### `resetLicenseModel` <a name="resetLicenseModel" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetLicenseModel"></a>

```java
public void resetLicenseModel()
```

##### `resetNodeCount` <a name="resetNodeCount" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetNodeCount"></a>

```java
public void resetNodeCount()
```

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetNsgIds"></a>

```java
public void resetNsgIds()
```

##### `resetPeerDbHomeId` <a name="resetPeerDbHomeId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerDbHomeId"></a>

```java
public void resetPeerDbHomeId()
```

##### `resetPeerDbSystemId` <a name="resetPeerDbSystemId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerDbSystemId"></a>

```java
public void resetPeerDbSystemId()
```

##### `resetPeerDbUniqueName` <a name="resetPeerDbUniqueName" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerDbUniqueName"></a>

```java
public void resetPeerDbUniqueName()
```

##### `resetPeerSidPrefix` <a name="resetPeerSidPrefix" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerSidPrefix"></a>

```java
public void resetPeerSidPrefix()
```

##### `resetPeerVmClusterId` <a name="resetPeerVmClusterId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerVmClusterId"></a>

```java
public void resetPeerVmClusterId()
```

##### `resetPrivateIp` <a name="resetPrivateIp" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPrivateIp"></a>

```java
public void resetPrivateIp()
```

##### `resetShape` <a name="resetShape" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetShape"></a>

```java
public void resetShape()
```

##### `resetStorageVolumePerformanceMode` <a name="resetStorageVolumePerformanceMode" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetStorageVolumePerformanceMode"></a>

```java
public void resetStorageVolumePerformanceMode()
```

##### `resetSubnetId` <a name="resetSubnetId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetSubnetId"></a>

```java
public void resetSubnetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimeZone` <a name="resetTimeZone" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetTimeZone"></a>

```java
public void resetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseDataGuardAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_data_guard_association.DatabaseDataGuardAssociation;

DatabaseDataGuardAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_data_guard_association.DatabaseDataGuardAssociation;

DatabaseDataGuardAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_data_guard_association.DatabaseDataGuardAssociation;

DatabaseDataGuardAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_data_guard_association.DatabaseDataGuardAssociation;

DatabaseDataGuardAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseDataGuardAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseDataGuardAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseDataGuardAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseDataGuardAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseDataGuardAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.applyLag">applyLag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.applyRate">applyRate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dataCollectionOptions">dataCollectionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference">DatabaseDataGuardAssociationDataCollectionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDatabaseId">peerDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDataGuardAssociationId">peerDataGuardAssociationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerRole">peerRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference">DatabaseDataGuardAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.backupNetworkNsgIdsInput">backupNetworkNsgIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.cpuCoreCountInput">cpuCoreCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.createAsyncInput">createAsyncInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.creationTypeInput">creationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseAdminPasswordInput">databaseAdminPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseDefinedTagsInput">databaseDefinedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseFreeformTagsInput">databaseFreeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseIdInput">databaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseSoftwareImageIdInput">databaseSoftwareImageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dataCollectionOptionsInput">dataCollectionOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions">DatabaseDataGuardAssociationDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemDefinedTagsInput">dbSystemDefinedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemFreeformTagsInput">dbSystemFreeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemSecurityAttributesInput">dbSystemSecurityAttributesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.deleteStandbyDbHomeOnDeleteInput">deleteStandbyDbHomeOnDeleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.faultDomainsInput">faultDomainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.isActiveDataGuardEnabledInput">isActiveDataGuardEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.licenseModelInput">licenseModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.nodeCountInput">nodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.nsgIdsInput">nsgIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbHomeIdInput">peerDbHomeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbSystemIdInput">peerDbSystemIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbUniqueNameInput">peerDbUniqueNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerSidPrefixInput">peerSidPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerVmClusterIdInput">peerVmClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.privateIpInput">privateIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.protectionModeInput">protectionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.shapeInput">shapeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.storageVolumePerformanceModeInput">storageVolumePerformanceModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts">DatabaseDataGuardAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.transportTypeInput">transportTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.backupNetworkNsgIds">backupNetworkNsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.createAsync">createAsync</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.creationType">creationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseAdminPassword">databaseAdminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseDefinedTags">databaseDefinedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseFreeformTags">databaseFreeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseId">databaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseSoftwareImageId">databaseSoftwareImageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemDefinedTags">dbSystemDefinedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemFreeformTags">dbSystemFreeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemSecurityAttributes">dbSystemSecurityAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.deleteStandbyDbHomeOnDelete">deleteStandbyDbHomeOnDelete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.faultDomains">faultDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.isActiveDataGuardEnabled">isActiveDataGuardEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbHomeId">peerDbHomeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbSystemId">peerDbSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbUniqueName">peerDbUniqueName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerSidPrefix">peerSidPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerVmClusterId">peerVmClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.protectionMode">protectionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.storageVolumePerformanceMode">storageVolumePerformanceMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.transportType">transportType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applyLag`<sup>Required</sup> <a name="applyLag" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.applyLag"></a>

```java
public java.lang.String getApplyLag();
```

- *Type:* java.lang.String

---

##### `applyRate`<sup>Required</sup> <a name="applyRate" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.applyRate"></a>

```java
public java.lang.String getApplyRate();
```

- *Type:* java.lang.String

---

##### `dataCollectionOptions`<sup>Required</sup> <a name="dataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dataCollectionOptions"></a>

```java
public DatabaseDataGuardAssociationDataCollectionOptionsOutputReference getDataCollectionOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference">DatabaseDataGuardAssociationDataCollectionOptionsOutputReference</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `peerDatabaseId`<sup>Required</sup> <a name="peerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDatabaseId"></a>

```java
public java.lang.String getPeerDatabaseId();
```

- *Type:* java.lang.String

---

##### `peerDataGuardAssociationId`<sup>Required</sup> <a name="peerDataGuardAssociationId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDataGuardAssociationId"></a>

```java
public java.lang.String getPeerDataGuardAssociationId();
```

- *Type:* java.lang.String

---

##### `peerRole`<sup>Required</sup> <a name="peerRole" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerRole"></a>

```java
public java.lang.String getPeerRole();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeouts"></a>

```java
public DatabaseDataGuardAssociationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference">DatabaseDataGuardAssociationTimeoutsOutputReference</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.availabilityDomainInput"></a>

```java
public java.lang.String getAvailabilityDomainInput();
```

- *Type:* java.lang.String

---

##### `backupNetworkNsgIdsInput`<sup>Optional</sup> <a name="backupNetworkNsgIdsInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.backupNetworkNsgIdsInput"></a>

```java
public java.util.List<java.lang.String> getBackupNetworkNsgIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cpuCoreCountInput`<sup>Optional</sup> <a name="cpuCoreCountInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.cpuCoreCountInput"></a>

```java
public java.lang.Number getCpuCoreCountInput();
```

- *Type:* java.lang.Number

---

##### `createAsyncInput`<sup>Optional</sup> <a name="createAsyncInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.createAsyncInput"></a>

```java
public java.lang.Object getCreateAsyncInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `creationTypeInput`<sup>Optional</sup> <a name="creationTypeInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.creationTypeInput"></a>

```java
public java.lang.String getCreationTypeInput();
```

- *Type:* java.lang.String

---

##### `databaseAdminPasswordInput`<sup>Optional</sup> <a name="databaseAdminPasswordInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseAdminPasswordInput"></a>

```java
public java.lang.String getDatabaseAdminPasswordInput();
```

- *Type:* java.lang.String

---

##### `databaseDefinedTagsInput`<sup>Optional</sup> <a name="databaseDefinedTagsInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseDefinedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDatabaseDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `databaseFreeformTagsInput`<sup>Optional</sup> <a name="databaseFreeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseFreeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDatabaseFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `databaseIdInput`<sup>Optional</sup> <a name="databaseIdInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseIdInput"></a>

```java
public java.lang.String getDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `databaseSoftwareImageIdInput`<sup>Optional</sup> <a name="databaseSoftwareImageIdInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseSoftwareImageIdInput"></a>

```java
public java.lang.String getDatabaseSoftwareImageIdInput();
```

- *Type:* java.lang.String

---

##### `dataCollectionOptionsInput`<sup>Optional</sup> <a name="dataCollectionOptionsInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dataCollectionOptionsInput"></a>

```java
public DatabaseDataGuardAssociationDataCollectionOptions getDataCollectionOptionsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions">DatabaseDataGuardAssociationDataCollectionOptions</a>

---

##### `dbSystemDefinedTagsInput`<sup>Optional</sup> <a name="dbSystemDefinedTagsInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemDefinedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDbSystemDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `dbSystemFreeformTagsInput`<sup>Optional</sup> <a name="dbSystemFreeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemFreeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDbSystemFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `dbSystemSecurityAttributesInput`<sup>Optional</sup> <a name="dbSystemSecurityAttributesInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemSecurityAttributesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDbSystemSecurityAttributesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deleteStandbyDbHomeOnDeleteInput`<sup>Optional</sup> <a name="deleteStandbyDbHomeOnDeleteInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.deleteStandbyDbHomeOnDeleteInput"></a>

```java
public java.lang.String getDeleteStandbyDbHomeOnDeleteInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `faultDomainsInput`<sup>Optional</sup> <a name="faultDomainsInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.faultDomainsInput"></a>

```java
public java.util.List<java.lang.String> getFaultDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isActiveDataGuardEnabledInput`<sup>Optional</sup> <a name="isActiveDataGuardEnabledInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.isActiveDataGuardEnabledInput"></a>

```java
public java.lang.Object getIsActiveDataGuardEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `licenseModelInput`<sup>Optional</sup> <a name="licenseModelInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.licenseModelInput"></a>

```java
public java.lang.String getLicenseModelInput();
```

- *Type:* java.lang.String

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.nodeCountInput"></a>

```java
public java.lang.Number getNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.nsgIdsInput"></a>

```java
public java.util.List<java.lang.String> getNsgIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `peerDbHomeIdInput`<sup>Optional</sup> <a name="peerDbHomeIdInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbHomeIdInput"></a>

```java
public java.lang.String getPeerDbHomeIdInput();
```

- *Type:* java.lang.String

---

##### `peerDbSystemIdInput`<sup>Optional</sup> <a name="peerDbSystemIdInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbSystemIdInput"></a>

```java
public java.lang.String getPeerDbSystemIdInput();
```

- *Type:* java.lang.String

---

##### `peerDbUniqueNameInput`<sup>Optional</sup> <a name="peerDbUniqueNameInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbUniqueNameInput"></a>

```java
public java.lang.String getPeerDbUniqueNameInput();
```

- *Type:* java.lang.String

---

##### `peerSidPrefixInput`<sup>Optional</sup> <a name="peerSidPrefixInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerSidPrefixInput"></a>

```java
public java.lang.String getPeerSidPrefixInput();
```

- *Type:* java.lang.String

---

##### `peerVmClusterIdInput`<sup>Optional</sup> <a name="peerVmClusterIdInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerVmClusterIdInput"></a>

```java
public java.lang.String getPeerVmClusterIdInput();
```

- *Type:* java.lang.String

---

##### `privateIpInput`<sup>Optional</sup> <a name="privateIpInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.privateIpInput"></a>

```java
public java.lang.String getPrivateIpInput();
```

- *Type:* java.lang.String

---

##### `protectionModeInput`<sup>Optional</sup> <a name="protectionModeInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.protectionModeInput"></a>

```java
public java.lang.String getProtectionModeInput();
```

- *Type:* java.lang.String

---

##### `shapeInput`<sup>Optional</sup> <a name="shapeInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.shapeInput"></a>

```java
public java.lang.String getShapeInput();
```

- *Type:* java.lang.String

---

##### `storageVolumePerformanceModeInput`<sup>Optional</sup> <a name="storageVolumePerformanceModeInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.storageVolumePerformanceModeInput"></a>

```java
public java.lang.String getStorageVolumePerformanceModeInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts">DatabaseDataGuardAssociationTimeouts</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `transportTypeInput`<sup>Optional</sup> <a name="transportTypeInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.transportTypeInput"></a>

```java
public java.lang.String getTransportTypeInput();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `backupNetworkNsgIds`<sup>Required</sup> <a name="backupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.backupNetworkNsgIds"></a>

```java
public java.util.List<java.lang.String> getBackupNetworkNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.cpuCoreCount"></a>

```java
public java.lang.Number getCpuCoreCount();
```

- *Type:* java.lang.Number

---

##### `createAsync`<sup>Required</sup> <a name="createAsync" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.createAsync"></a>

```java
public java.lang.Object getCreateAsync();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `creationType`<sup>Required</sup> <a name="creationType" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.creationType"></a>

```java
public java.lang.String getCreationType();
```

- *Type:* java.lang.String

---

##### `databaseAdminPassword`<sup>Required</sup> <a name="databaseAdminPassword" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseAdminPassword"></a>

```java
public java.lang.String getDatabaseAdminPassword();
```

- *Type:* java.lang.String

---

##### `databaseDefinedTags`<sup>Required</sup> <a name="databaseDefinedTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseDefinedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDatabaseDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `databaseFreeformTags`<sup>Required</sup> <a name="databaseFreeformTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseFreeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDatabaseFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseId"></a>

```java
public java.lang.String getDatabaseId();
```

- *Type:* java.lang.String

---

##### `databaseSoftwareImageId`<sup>Required</sup> <a name="databaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseSoftwareImageId"></a>

```java
public java.lang.String getDatabaseSoftwareImageId();
```

- *Type:* java.lang.String

---

##### `dbSystemDefinedTags`<sup>Required</sup> <a name="dbSystemDefinedTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemDefinedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDbSystemDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `dbSystemFreeformTags`<sup>Required</sup> <a name="dbSystemFreeformTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemFreeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDbSystemFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `dbSystemSecurityAttributes`<sup>Required</sup> <a name="dbSystemSecurityAttributes" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemSecurityAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDbSystemSecurityAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deleteStandbyDbHomeOnDelete`<sup>Required</sup> <a name="deleteStandbyDbHomeOnDelete" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.deleteStandbyDbHomeOnDelete"></a>

```java
public java.lang.String getDeleteStandbyDbHomeOnDelete();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `faultDomains`<sup>Required</sup> <a name="faultDomains" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.faultDomains"></a>

```java
public java.util.List<java.lang.String> getFaultDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isActiveDataGuardEnabled`<sup>Required</sup> <a name="isActiveDataGuardEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.isActiveDataGuardEnabled"></a>

```java
public java.lang.Object getIsActiveDataGuardEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `peerDbHomeId`<sup>Required</sup> <a name="peerDbHomeId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbHomeId"></a>

```java
public java.lang.String getPeerDbHomeId();
```

- *Type:* java.lang.String

---

##### `peerDbSystemId`<sup>Required</sup> <a name="peerDbSystemId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbSystemId"></a>

```java
public java.lang.String getPeerDbSystemId();
```

- *Type:* java.lang.String

---

##### `peerDbUniqueName`<sup>Required</sup> <a name="peerDbUniqueName" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbUniqueName"></a>

```java
public java.lang.String getPeerDbUniqueName();
```

- *Type:* java.lang.String

---

##### `peerSidPrefix`<sup>Required</sup> <a name="peerSidPrefix" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerSidPrefix"></a>

```java
public java.lang.String getPeerSidPrefix();
```

- *Type:* java.lang.String

---

##### `peerVmClusterId`<sup>Required</sup> <a name="peerVmClusterId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerVmClusterId"></a>

```java
public java.lang.String getPeerVmClusterId();
```

- *Type:* java.lang.String

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

---

##### `protectionMode`<sup>Required</sup> <a name="protectionMode" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.protectionMode"></a>

```java
public java.lang.String getProtectionMode();
```

- *Type:* java.lang.String

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `storageVolumePerformanceMode`<sup>Required</sup> <a name="storageVolumePerformanceMode" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.storageVolumePerformanceMode"></a>

```java
public java.lang.String getStorageVolumePerformanceMode();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `transportType`<sup>Required</sup> <a name="transportType" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.transportType"></a>

```java
public java.lang.String getTransportType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseDataGuardAssociationConfig <a name="DatabaseDataGuardAssociationConfig" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_data_guard_association.DatabaseDataGuardAssociationConfig;

DatabaseDataGuardAssociationConfig.builder()
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
    .creationType(java.lang.String)
    .databaseAdminPassword(java.lang.String)
    .databaseId(java.lang.String)
    .deleteStandbyDbHomeOnDelete(java.lang.String)
    .protectionMode(java.lang.String)
    .transportType(java.lang.String)
//  .availabilityDomain(java.lang.String)
//  .backupNetworkNsgIds(java.util.List<java.lang.String>)
//  .cpuCoreCount(java.lang.Number)
//  .createAsync(java.lang.Boolean)
//  .createAsync(IResolvable)
//  .databaseDefinedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .databaseFreeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .databaseSoftwareImageId(java.lang.String)
//  .dataCollectionOptions(DatabaseDataGuardAssociationDataCollectionOptions)
//  .dbSystemDefinedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .dbSystemFreeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .dbSystemSecurityAttributes(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .domain(java.lang.String)
//  .faultDomains(java.util.List<java.lang.String>)
//  .hostname(java.lang.String)
//  .id(java.lang.String)
//  .isActiveDataGuardEnabled(java.lang.Boolean)
//  .isActiveDataGuardEnabled(IResolvable)
//  .licenseModel(java.lang.String)
//  .nodeCount(java.lang.Number)
//  .nsgIds(java.util.List<java.lang.String>)
//  .peerDbHomeId(java.lang.String)
//  .peerDbSystemId(java.lang.String)
//  .peerDbUniqueName(java.lang.String)
//  .peerSidPrefix(java.lang.String)
//  .peerVmClusterId(java.lang.String)
//  .privateIp(java.lang.String)
//  .shape(java.lang.String)
//  .storageVolumePerformanceMode(java.lang.String)
//  .subnetId(java.lang.String)
//  .timeouts(DatabaseDataGuardAssociationTimeouts)
//  .timeZone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.creationType">creationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#creation_type DatabaseDataGuardAssociation#creation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseAdminPassword">databaseAdminPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_admin_password DatabaseDataGuardAssociation#database_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseId">databaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_id DatabaseDataGuardAssociation#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.deleteStandbyDbHomeOnDelete">deleteStandbyDbHomeOnDelete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#delete_standby_db_home_on_delete DatabaseDataGuardAssociation#delete_standby_db_home_on_delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.protectionMode">protectionMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#protection_mode DatabaseDataGuardAssociation#protection_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.transportType">transportType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#transport_type DatabaseDataGuardAssociation#transport_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#availability_domain DatabaseDataGuardAssociation#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.backupNetworkNsgIds">backupNetworkNsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#backup_network_nsg_ids DatabaseDataGuardAssociation#backup_network_nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#cpu_core_count DatabaseDataGuardAssociation#cpu_core_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.createAsync">createAsync</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#create_async DatabaseDataGuardAssociation#create_async}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseDefinedTags">databaseDefinedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_defined_tags DatabaseDataGuardAssociation#database_defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseFreeformTags">databaseFreeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_freeform_tags DatabaseDataGuardAssociation#database_freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseSoftwareImageId">databaseSoftwareImageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_software_image_id DatabaseDataGuardAssociation#database_software_image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dataCollectionOptions">dataCollectionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions">DatabaseDataGuardAssociationDataCollectionOptions</a></code> | data_collection_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dbSystemDefinedTags">dbSystemDefinedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#db_system_defined_tags DatabaseDataGuardAssociation#db_system_defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dbSystemFreeformTags">dbSystemFreeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#db_system_freeform_tags DatabaseDataGuardAssociation#db_system_freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dbSystemSecurityAttributes">dbSystemSecurityAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#db_system_security_attributes DatabaseDataGuardAssociation#db_system_security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#display_name DatabaseDataGuardAssociation#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#domain DatabaseDataGuardAssociation#domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.faultDomains">faultDomains</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#fault_domains DatabaseDataGuardAssociation#fault_domains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#hostname DatabaseDataGuardAssociation#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#id DatabaseDataGuardAssociation#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.isActiveDataGuardEnabled">isActiveDataGuardEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_active_data_guard_enabled DatabaseDataGuardAssociation#is_active_data_guard_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#license_model DatabaseDataGuardAssociation#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#node_count DatabaseDataGuardAssociation#node_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#nsg_ids DatabaseDataGuardAssociation#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerDbHomeId">peerDbHomeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_db_home_id DatabaseDataGuardAssociation#peer_db_home_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerDbSystemId">peerDbSystemId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_db_system_id DatabaseDataGuardAssociation#peer_db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerDbUniqueName">peerDbUniqueName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_db_unique_name DatabaseDataGuardAssociation#peer_db_unique_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerSidPrefix">peerSidPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_sid_prefix DatabaseDataGuardAssociation#peer_sid_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerVmClusterId">peerVmClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_vm_cluster_id DatabaseDataGuardAssociation#peer_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#private_ip DatabaseDataGuardAssociation#private_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.shape">shape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#shape DatabaseDataGuardAssociation#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.storageVolumePerformanceMode">storageVolumePerformanceMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#storage_volume_performance_mode DatabaseDataGuardAssociation#storage_volume_performance_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#subnet_id DatabaseDataGuardAssociation#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts">DatabaseDataGuardAssociationTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#time_zone DatabaseDataGuardAssociation#time_zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `creationType`<sup>Required</sup> <a name="creationType" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.creationType"></a>

```java
public java.lang.String getCreationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#creation_type DatabaseDataGuardAssociation#creation_type}.

---

##### `databaseAdminPassword`<sup>Required</sup> <a name="databaseAdminPassword" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseAdminPassword"></a>

```java
public java.lang.String getDatabaseAdminPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_admin_password DatabaseDataGuardAssociation#database_admin_password}.

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseId"></a>

```java
public java.lang.String getDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_id DatabaseDataGuardAssociation#database_id}.

---

##### `deleteStandbyDbHomeOnDelete`<sup>Required</sup> <a name="deleteStandbyDbHomeOnDelete" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.deleteStandbyDbHomeOnDelete"></a>

```java
public java.lang.String getDeleteStandbyDbHomeOnDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#delete_standby_db_home_on_delete DatabaseDataGuardAssociation#delete_standby_db_home_on_delete}.

---

##### `protectionMode`<sup>Required</sup> <a name="protectionMode" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.protectionMode"></a>

```java
public java.lang.String getProtectionMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#protection_mode DatabaseDataGuardAssociation#protection_mode}.

---

##### `transportType`<sup>Required</sup> <a name="transportType" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.transportType"></a>

```java
public java.lang.String getTransportType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#transport_type DatabaseDataGuardAssociation#transport_type}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#availability_domain DatabaseDataGuardAssociation#availability_domain}.

---

##### `backupNetworkNsgIds`<sup>Optional</sup> <a name="backupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.backupNetworkNsgIds"></a>

```java
public java.util.List<java.lang.String> getBackupNetworkNsgIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#backup_network_nsg_ids DatabaseDataGuardAssociation#backup_network_nsg_ids}.

---

##### `cpuCoreCount`<sup>Optional</sup> <a name="cpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.cpuCoreCount"></a>

```java
public java.lang.Number getCpuCoreCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#cpu_core_count DatabaseDataGuardAssociation#cpu_core_count}.

---

##### `createAsync`<sup>Optional</sup> <a name="createAsync" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.createAsync"></a>

```java
public java.lang.Object getCreateAsync();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#create_async DatabaseDataGuardAssociation#create_async}.

---

##### `databaseDefinedTags`<sup>Optional</sup> <a name="databaseDefinedTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseDefinedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDatabaseDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_defined_tags DatabaseDataGuardAssociation#database_defined_tags}.

---

##### `databaseFreeformTags`<sup>Optional</sup> <a name="databaseFreeformTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseFreeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDatabaseFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_freeform_tags DatabaseDataGuardAssociation#database_freeform_tags}.

---

##### `databaseSoftwareImageId`<sup>Optional</sup> <a name="databaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseSoftwareImageId"></a>

```java
public java.lang.String getDatabaseSoftwareImageId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_software_image_id DatabaseDataGuardAssociation#database_software_image_id}.

---

##### `dataCollectionOptions`<sup>Optional</sup> <a name="dataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dataCollectionOptions"></a>

```java
public DatabaseDataGuardAssociationDataCollectionOptions getDataCollectionOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions">DatabaseDataGuardAssociationDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#data_collection_options DatabaseDataGuardAssociation#data_collection_options}

---

##### `dbSystemDefinedTags`<sup>Optional</sup> <a name="dbSystemDefinedTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dbSystemDefinedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDbSystemDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#db_system_defined_tags DatabaseDataGuardAssociation#db_system_defined_tags}.

---

##### `dbSystemFreeformTags`<sup>Optional</sup> <a name="dbSystemFreeformTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dbSystemFreeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDbSystemFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#db_system_freeform_tags DatabaseDataGuardAssociation#db_system_freeform_tags}.

---

##### `dbSystemSecurityAttributes`<sup>Optional</sup> <a name="dbSystemSecurityAttributes" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dbSystemSecurityAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDbSystemSecurityAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#db_system_security_attributes DatabaseDataGuardAssociation#db_system_security_attributes}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#display_name DatabaseDataGuardAssociation#display_name}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#domain DatabaseDataGuardAssociation#domain}.

---

##### `faultDomains`<sup>Optional</sup> <a name="faultDomains" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.faultDomains"></a>

```java
public java.util.List<java.lang.String> getFaultDomains();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#fault_domains DatabaseDataGuardAssociation#fault_domains}.

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#hostname DatabaseDataGuardAssociation#hostname}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#id DatabaseDataGuardAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isActiveDataGuardEnabled`<sup>Optional</sup> <a name="isActiveDataGuardEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.isActiveDataGuardEnabled"></a>

```java
public java.lang.Object getIsActiveDataGuardEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_active_data_guard_enabled DatabaseDataGuardAssociation#is_active_data_guard_enabled}.

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#license_model DatabaseDataGuardAssociation#license_model}.

---

##### `nodeCount`<sup>Optional</sup> <a name="nodeCount" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#node_count DatabaseDataGuardAssociation#node_count}.

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#nsg_ids DatabaseDataGuardAssociation#nsg_ids}.

---

##### `peerDbHomeId`<sup>Optional</sup> <a name="peerDbHomeId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerDbHomeId"></a>

```java
public java.lang.String getPeerDbHomeId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_db_home_id DatabaseDataGuardAssociation#peer_db_home_id}.

---

##### `peerDbSystemId`<sup>Optional</sup> <a name="peerDbSystemId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerDbSystemId"></a>

```java
public java.lang.String getPeerDbSystemId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_db_system_id DatabaseDataGuardAssociation#peer_db_system_id}.

---

##### `peerDbUniqueName`<sup>Optional</sup> <a name="peerDbUniqueName" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerDbUniqueName"></a>

```java
public java.lang.String getPeerDbUniqueName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_db_unique_name DatabaseDataGuardAssociation#peer_db_unique_name}.

---

##### `peerSidPrefix`<sup>Optional</sup> <a name="peerSidPrefix" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerSidPrefix"></a>

```java
public java.lang.String getPeerSidPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_sid_prefix DatabaseDataGuardAssociation#peer_sid_prefix}.

---

##### `peerVmClusterId`<sup>Optional</sup> <a name="peerVmClusterId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerVmClusterId"></a>

```java
public java.lang.String getPeerVmClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_vm_cluster_id DatabaseDataGuardAssociation#peer_vm_cluster_id}.

---

##### `privateIp`<sup>Optional</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#private_ip DatabaseDataGuardAssociation#private_ip}.

---

##### `shape`<sup>Optional</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#shape DatabaseDataGuardAssociation#shape}.

---

##### `storageVolumePerformanceMode`<sup>Optional</sup> <a name="storageVolumePerformanceMode" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.storageVolumePerformanceMode"></a>

```java
public java.lang.String getStorageVolumePerformanceMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#storage_volume_performance_mode DatabaseDataGuardAssociation#storage_volume_performance_mode}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#subnet_id DatabaseDataGuardAssociation#subnet_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.timeouts"></a>

```java
public DatabaseDataGuardAssociationTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts">DatabaseDataGuardAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#timeouts DatabaseDataGuardAssociation#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#time_zone DatabaseDataGuardAssociation#time_zone}.

---

### DatabaseDataGuardAssociationDataCollectionOptions <a name="DatabaseDataGuardAssociationDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_data_guard_association.DatabaseDataGuardAssociationDataCollectionOptions;

DatabaseDataGuardAssociationDataCollectionOptions.builder()
//  .isDiagnosticsEventsEnabled(java.lang.Boolean)
//  .isDiagnosticsEventsEnabled(IResolvable)
//  .isHealthMonitoringEnabled(java.lang.Boolean)
//  .isHealthMonitoringEnabled(IResolvable)
//  .isIncidentLogsEnabled(java.lang.Boolean)
//  .isIncidentLogsEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions.property.isDiagnosticsEventsEnabled">isDiagnosticsEventsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_diagnostics_events_enabled DatabaseDataGuardAssociation#is_diagnostics_events_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions.property.isHealthMonitoringEnabled">isHealthMonitoringEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_health_monitoring_enabled DatabaseDataGuardAssociation#is_health_monitoring_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions.property.isIncidentLogsEnabled">isIncidentLogsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_incident_logs_enabled DatabaseDataGuardAssociation#is_incident_logs_enabled}. |

---

##### `isDiagnosticsEventsEnabled`<sup>Optional</sup> <a name="isDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions.property.isDiagnosticsEventsEnabled"></a>

```java
public java.lang.Object getIsDiagnosticsEventsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_diagnostics_events_enabled DatabaseDataGuardAssociation#is_diagnostics_events_enabled}.

---

##### `isHealthMonitoringEnabled`<sup>Optional</sup> <a name="isHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions.property.isHealthMonitoringEnabled"></a>

```java
public java.lang.Object getIsHealthMonitoringEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_health_monitoring_enabled DatabaseDataGuardAssociation#is_health_monitoring_enabled}.

---

##### `isIncidentLogsEnabled`<sup>Optional</sup> <a name="isIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions.property.isIncidentLogsEnabled"></a>

```java
public java.lang.Object getIsIncidentLogsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_incident_logs_enabled DatabaseDataGuardAssociation#is_incident_logs_enabled}.

---

### DatabaseDataGuardAssociationTimeouts <a name="DatabaseDataGuardAssociationTimeouts" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_data_guard_association.DatabaseDataGuardAssociationTimeouts;

DatabaseDataGuardAssociationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#create DatabaseDataGuardAssociation#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#delete DatabaseDataGuardAssociation#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#update DatabaseDataGuardAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#create DatabaseDataGuardAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#delete DatabaseDataGuardAssociation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#update DatabaseDataGuardAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseDataGuardAssociationDataCollectionOptionsOutputReference <a name="DatabaseDataGuardAssociationDataCollectionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_data_guard_association.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference;

new DatabaseDataGuardAssociationDataCollectionOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled">resetIsDiagnosticsEventsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled">resetIsHealthMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled">resetIsIncidentLogsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsDiagnosticsEventsEnabled` <a name="resetIsDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled"></a>

```java
public void resetIsDiagnosticsEventsEnabled()
```

##### `resetIsHealthMonitoringEnabled` <a name="resetIsHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled"></a>

```java
public void resetIsHealthMonitoringEnabled()
```

##### `resetIsIncidentLogsEnabled` <a name="resetIsIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled"></a>

```java
public void resetIsIncidentLogsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput">isDiagnosticsEventsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput">isHealthMonitoringEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput">isIncidentLogsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">isDiagnosticsEventsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">isHealthMonitoringEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">isIncidentLogsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions">DatabaseDataGuardAssociationDataCollectionOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isDiagnosticsEventsEnabledInput`<sup>Optional</sup> <a name="isDiagnosticsEventsEnabledInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput"></a>

```java
public java.lang.Object getIsDiagnosticsEventsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isHealthMonitoringEnabledInput`<sup>Optional</sup> <a name="isHealthMonitoringEnabledInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput"></a>

```java
public java.lang.Object getIsHealthMonitoringEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isIncidentLogsEnabledInput`<sup>Optional</sup> <a name="isIncidentLogsEnabledInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput"></a>

```java
public java.lang.Object getIsIncidentLogsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isDiagnosticsEventsEnabled`<sup>Required</sup> <a name="isDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```java
public java.lang.Object getIsDiagnosticsEventsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isHealthMonitoringEnabled`<sup>Required</sup> <a name="isHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```java
public java.lang.Object getIsHealthMonitoringEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isIncidentLogsEnabled`<sup>Required</sup> <a name="isIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```java
public java.lang.Object getIsIncidentLogsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.internalValue"></a>

```java
public DatabaseDataGuardAssociationDataCollectionOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions">DatabaseDataGuardAssociationDataCollectionOptions</a>

---


### DatabaseDataGuardAssociationTimeoutsOutputReference <a name="DatabaseDataGuardAssociationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_data_guard_association.DatabaseDataGuardAssociationTimeoutsOutputReference;

new DatabaseDataGuardAssociationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts">DatabaseDataGuardAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts">DatabaseDataGuardAssociationTimeouts</a>

---



