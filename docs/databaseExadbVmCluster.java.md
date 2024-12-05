# `databaseExadbVmCluster` Submodule <a name="`databaseExadbVmCluster` Submodule" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseExadbVmCluster <a name="DatabaseExadbVmCluster" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster oci_database_exadb_vm_cluster}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadb_vm_cluster.DatabaseExadbVmCluster;

DatabaseExadbVmCluster.Builder.create(Construct scope, java.lang.String id)
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
    .availabilityDomain(java.lang.String)
    .backupSubnetId(java.lang.String)
    .compartmentId(java.lang.String)
    .displayName(java.lang.String)
    .exascaleDbStorageVaultId(java.lang.String)
    .gridImageId(java.lang.String)
    .hostname(java.lang.String)
    .nodeConfig(DatabaseExadbVmClusterNodeConfig)
    .shape(java.lang.String)
    .sshPublicKeys(java.util.List<java.lang.String>)
    .subnetId(java.lang.String)
//  .backupNetworkNsgIds(java.util.List<java.lang.String>)
//  .clusterName(java.lang.String)
//  .dataCollectionOptions(DatabaseExadbVmClusterDataCollectionOptions)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .domain(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .licenseModel(java.lang.String)
//  .nodeResource(IResolvable)
//  .nodeResource(java.util.List<DatabaseExadbVmClusterNodeResource>)
//  .nsgIds(java.util.List<java.lang.String>)
//  .privateZoneId(java.lang.String)
//  .scanListenerPortTcp(java.lang.Number)
//  .scanListenerPortTcpSsl(java.lang.Number)
//  .securityAttributes(java.util.Map<java.lang.String, java.lang.String>)
//  .systemVersion(java.lang.String)
//  .timeouts(DatabaseExadbVmClusterTimeouts)
//  .timeZone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#availability_domain DatabaseExadbVmCluster#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.backupSubnetId">backupSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#backup_subnet_id DatabaseExadbVmCluster#backup_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#compartment_id DatabaseExadbVmCluster#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#display_name DatabaseExadbVmCluster#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.exascaleDbStorageVaultId">exascaleDbStorageVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#exascale_db_storage_vault_id DatabaseExadbVmCluster#exascale_db_storage_vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.gridImageId">gridImageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#grid_image_id DatabaseExadbVmCluster#grid_image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.hostname">hostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#hostname DatabaseExadbVmCluster#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.nodeConfig">nodeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig">DatabaseExadbVmClusterNodeConfig</a></code> | node_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.shape">shape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#shape DatabaseExadbVmCluster#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.sshPublicKeys">sshPublicKeys</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#ssh_public_keys DatabaseExadbVmCluster#ssh_public_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#subnet_id DatabaseExadbVmCluster#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.backupNetworkNsgIds">backupNetworkNsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#backup_network_nsg_ids DatabaseExadbVmCluster#backup_network_nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#cluster_name DatabaseExadbVmCluster#cluster_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.dataCollectionOptions">dataCollectionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions">DatabaseExadbVmClusterDataCollectionOptions</a></code> | data_collection_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#defined_tags DatabaseExadbVmCluster#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#domain DatabaseExadbVmCluster#domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#freeform_tags DatabaseExadbVmCluster#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#id DatabaseExadbVmCluster#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#license_model DatabaseExadbVmCluster#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.nodeResource">nodeResource</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResource">DatabaseExadbVmClusterNodeResource</a>></code> | node_resource block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#nsg_ids DatabaseExadbVmCluster#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.privateZoneId">privateZoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#private_zone_id DatabaseExadbVmCluster#private_zone_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.scanListenerPortTcp">scanListenerPortTcp</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#scan_listener_port_tcp DatabaseExadbVmCluster#scan_listener_port_tcp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.scanListenerPortTcpSsl">scanListenerPortTcpSsl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#scan_listener_port_tcp_ssl DatabaseExadbVmCluster#scan_listener_port_tcp_ssl}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.securityAttributes">securityAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#security_attributes DatabaseExadbVmCluster#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.systemVersion">systemVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#system_version DatabaseExadbVmCluster#system_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts">DatabaseExadbVmClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#time_zone DatabaseExadbVmCluster#time_zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.availabilityDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#availability_domain DatabaseExadbVmCluster#availability_domain}.

---

##### `backupSubnetId`<sup>Required</sup> <a name="backupSubnetId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.backupSubnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#backup_subnet_id DatabaseExadbVmCluster#backup_subnet_id}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#compartment_id DatabaseExadbVmCluster#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#display_name DatabaseExadbVmCluster#display_name}.

---

##### `exascaleDbStorageVaultId`<sup>Required</sup> <a name="exascaleDbStorageVaultId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.exascaleDbStorageVaultId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#exascale_db_storage_vault_id DatabaseExadbVmCluster#exascale_db_storage_vault_id}.

---

##### `gridImageId`<sup>Required</sup> <a name="gridImageId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.gridImageId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#grid_image_id DatabaseExadbVmCluster#grid_image_id}.

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.hostname"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#hostname DatabaseExadbVmCluster#hostname}.

---

##### `nodeConfig`<sup>Required</sup> <a name="nodeConfig" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.nodeConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig">DatabaseExadbVmClusterNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#node_config DatabaseExadbVmCluster#node_config}

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.shape"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#shape DatabaseExadbVmCluster#shape}.

---

##### `sshPublicKeys`<sup>Required</sup> <a name="sshPublicKeys" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.sshPublicKeys"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#ssh_public_keys DatabaseExadbVmCluster#ssh_public_keys}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#subnet_id DatabaseExadbVmCluster#subnet_id}.

---

##### `backupNetworkNsgIds`<sup>Optional</sup> <a name="backupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.backupNetworkNsgIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#backup_network_nsg_ids DatabaseExadbVmCluster#backup_network_nsg_ids}.

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.clusterName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#cluster_name DatabaseExadbVmCluster#cluster_name}.

---

##### `dataCollectionOptions`<sup>Optional</sup> <a name="dataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.dataCollectionOptions"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions">DatabaseExadbVmClusterDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#data_collection_options DatabaseExadbVmCluster#data_collection_options}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#defined_tags DatabaseExadbVmCluster#defined_tags}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.domain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#domain DatabaseExadbVmCluster#domain}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#freeform_tags DatabaseExadbVmCluster#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#id DatabaseExadbVmCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.licenseModel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#license_model DatabaseExadbVmCluster#license_model}.

---

##### `nodeResource`<sup>Optional</sup> <a name="nodeResource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.nodeResource"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResource">DatabaseExadbVmClusterNodeResource</a>>

node_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#node_resource DatabaseExadbVmCluster#node_resource}

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.nsgIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#nsg_ids DatabaseExadbVmCluster#nsg_ids}.

---

##### `privateZoneId`<sup>Optional</sup> <a name="privateZoneId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.privateZoneId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#private_zone_id DatabaseExadbVmCluster#private_zone_id}.

---

##### `scanListenerPortTcp`<sup>Optional</sup> <a name="scanListenerPortTcp" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.scanListenerPortTcp"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#scan_listener_port_tcp DatabaseExadbVmCluster#scan_listener_port_tcp}.

---

##### `scanListenerPortTcpSsl`<sup>Optional</sup> <a name="scanListenerPortTcpSsl" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.scanListenerPortTcpSsl"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#scan_listener_port_tcp_ssl DatabaseExadbVmCluster#scan_listener_port_tcp_ssl}.

---

##### `securityAttributes`<sup>Optional</sup> <a name="securityAttributes" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.securityAttributes"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#security_attributes DatabaseExadbVmCluster#security_attributes}.

---

##### `systemVersion`<sup>Optional</sup> <a name="systemVersion" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.systemVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#system_version DatabaseExadbVmCluster#system_version}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts">DatabaseExadbVmClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#timeouts DatabaseExadbVmCluster#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.timeZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#time_zone DatabaseExadbVmCluster#time_zone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.putDataCollectionOptions">putDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.putNodeConfig">putNodeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.putNodeResource">putNodeResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetBackupNetworkNsgIds">resetBackupNetworkNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetClusterName">resetClusterName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetDataCollectionOptions">resetDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetLicenseModel">resetLicenseModel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetNodeResource">resetNodeResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetNsgIds">resetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetPrivateZoneId">resetPrivateZoneId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetScanListenerPortTcp">resetScanListenerPortTcp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetScanListenerPortTcpSsl">resetScanListenerPortTcpSsl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetSecurityAttributes">resetSecurityAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetSystemVersion">resetSystemVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataCollectionOptions` <a name="putDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.putDataCollectionOptions"></a>

```java
public void putDataCollectionOptions(DatabaseExadbVmClusterDataCollectionOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.putDataCollectionOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions">DatabaseExadbVmClusterDataCollectionOptions</a>

---

##### `putNodeConfig` <a name="putNodeConfig" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.putNodeConfig"></a>

```java
public void putNodeConfig(DatabaseExadbVmClusterNodeConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.putNodeConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig">DatabaseExadbVmClusterNodeConfig</a>

---

##### `putNodeResource` <a name="putNodeResource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.putNodeResource"></a>

```java
public void putNodeResource(IResolvable OR java.util.List<DatabaseExadbVmClusterNodeResource> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.putNodeResource.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResource">DatabaseExadbVmClusterNodeResource</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.putTimeouts"></a>

```java
public void putTimeouts(DatabaseExadbVmClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts">DatabaseExadbVmClusterTimeouts</a>

---

##### `resetBackupNetworkNsgIds` <a name="resetBackupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetBackupNetworkNsgIds"></a>

```java
public void resetBackupNetworkNsgIds()
```

##### `resetClusterName` <a name="resetClusterName" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetClusterName"></a>

```java
public void resetClusterName()
```

##### `resetDataCollectionOptions` <a name="resetDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetDataCollectionOptions"></a>

```java
public void resetDataCollectionOptions()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDomain` <a name="resetDomain" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetDomain"></a>

```java
public void resetDomain()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetId"></a>

```java
public void resetId()
```

##### `resetLicenseModel` <a name="resetLicenseModel" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetLicenseModel"></a>

```java
public void resetLicenseModel()
```

##### `resetNodeResource` <a name="resetNodeResource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetNodeResource"></a>

```java
public void resetNodeResource()
```

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetNsgIds"></a>

```java
public void resetNsgIds()
```

##### `resetPrivateZoneId` <a name="resetPrivateZoneId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetPrivateZoneId"></a>

```java
public void resetPrivateZoneId()
```

##### `resetScanListenerPortTcp` <a name="resetScanListenerPortTcp" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetScanListenerPortTcp"></a>

```java
public void resetScanListenerPortTcp()
```

##### `resetScanListenerPortTcpSsl` <a name="resetScanListenerPortTcpSsl" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetScanListenerPortTcpSsl"></a>

```java
public void resetScanListenerPortTcpSsl()
```

##### `resetSecurityAttributes` <a name="resetSecurityAttributes" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetSecurityAttributes"></a>

```java
public void resetSecurityAttributes()
```

##### `resetSystemVersion` <a name="resetSystemVersion" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetSystemVersion"></a>

```java
public void resetSystemVersion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimeZone` <a name="resetTimeZone" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetTimeZone"></a>

```java
public void resetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseExadbVmCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadb_vm_cluster.DatabaseExadbVmCluster;

DatabaseExadbVmCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadb_vm_cluster.DatabaseExadbVmCluster;

DatabaseExadbVmCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadb_vm_cluster.DatabaseExadbVmCluster;

DatabaseExadbVmCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadb_vm_cluster.DatabaseExadbVmCluster;

DatabaseExadbVmCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseExadbVmCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseExadbVmCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseExadbVmCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseExadbVmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseExadbVmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.dataCollectionOptions">dataCollectionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference">DatabaseExadbVmClusterDataCollectionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.giVersion">giVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.gridImageType">gridImageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.iormConfigCache">iormConfigCache</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList">DatabaseExadbVmClusterIormConfigCacheList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.lastUpdateHistoryEntryId">lastUpdateHistoryEntryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.listenerPort">listenerPort</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.nodeConfig">nodeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference">DatabaseExadbVmClusterNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.nodeResource">nodeResource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList">DatabaseExadbVmClusterNodeResourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.scanDnsName">scanDnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.scanDnsRecordId">scanDnsRecordId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.scanIpIds">scanIpIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference">DatabaseExadbVmClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.vipIds">vipIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.backupNetworkNsgIdsInput">backupNetworkNsgIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.backupSubnetIdInput">backupSubnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.clusterNameInput">clusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.dataCollectionOptionsInput">dataCollectionOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions">DatabaseExadbVmClusterDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.exascaleDbStorageVaultIdInput">exascaleDbStorageVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.gridImageIdInput">gridImageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.licenseModelInput">licenseModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.nodeConfigInput">nodeConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig">DatabaseExadbVmClusterNodeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.nodeResourceInput">nodeResourceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResource">DatabaseExadbVmClusterNodeResource</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.nsgIdsInput">nsgIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.privateZoneIdInput">privateZoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.scanListenerPortTcpInput">scanListenerPortTcpInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.scanListenerPortTcpSslInput">scanListenerPortTcpSslInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.securityAttributesInput">securityAttributesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.shapeInput">shapeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.sshPublicKeysInput">sshPublicKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.systemVersionInput">systemVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts">DatabaseExadbVmClusterTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.backupNetworkNsgIds">backupNetworkNsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.backupSubnetId">backupSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.exascaleDbStorageVaultId">exascaleDbStorageVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.gridImageId">gridImageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.privateZoneId">privateZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.scanListenerPortTcp">scanListenerPortTcp</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.scanListenerPortTcpSsl">scanListenerPortTcpSsl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.securityAttributes">securityAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.sshPublicKeys">sshPublicKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.systemVersion">systemVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataCollectionOptions`<sup>Required</sup> <a name="dataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.dataCollectionOptions"></a>

```java
public DatabaseExadbVmClusterDataCollectionOptionsOutputReference getDataCollectionOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference">DatabaseExadbVmClusterDataCollectionOptionsOutputReference</a>

---

##### `giVersion`<sup>Required</sup> <a name="giVersion" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.giVersion"></a>

```java
public java.lang.String getGiVersion();
```

- *Type:* java.lang.String

---

##### `gridImageType`<sup>Required</sup> <a name="gridImageType" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.gridImageType"></a>

```java
public java.lang.String getGridImageType();
```

- *Type:* java.lang.String

---

##### `iormConfigCache`<sup>Required</sup> <a name="iormConfigCache" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.iormConfigCache"></a>

```java
public DatabaseExadbVmClusterIormConfigCacheList getIormConfigCache();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList">DatabaseExadbVmClusterIormConfigCacheList</a>

---

##### `lastUpdateHistoryEntryId`<sup>Required</sup> <a name="lastUpdateHistoryEntryId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.lastUpdateHistoryEntryId"></a>

```java
public java.lang.String getLastUpdateHistoryEntryId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `listenerPort`<sup>Required</sup> <a name="listenerPort" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.listenerPort"></a>

```java
public java.lang.String getListenerPort();
```

- *Type:* java.lang.String

---

##### `nodeConfig`<sup>Required</sup> <a name="nodeConfig" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.nodeConfig"></a>

```java
public DatabaseExadbVmClusterNodeConfigOutputReference getNodeConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference">DatabaseExadbVmClusterNodeConfigOutputReference</a>

---

##### `nodeResource`<sup>Required</sup> <a name="nodeResource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.nodeResource"></a>

```java
public DatabaseExadbVmClusterNodeResourceList getNodeResource();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList">DatabaseExadbVmClusterNodeResourceList</a>

---

##### `scanDnsName`<sup>Required</sup> <a name="scanDnsName" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.scanDnsName"></a>

```java
public java.lang.String getScanDnsName();
```

- *Type:* java.lang.String

---

##### `scanDnsRecordId`<sup>Required</sup> <a name="scanDnsRecordId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.scanDnsRecordId"></a>

```java
public java.lang.String getScanDnsRecordId();
```

- *Type:* java.lang.String

---

##### `scanIpIds`<sup>Required</sup> <a name="scanIpIds" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.scanIpIds"></a>

```java
public java.util.List<java.lang.String> getScanIpIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.timeouts"></a>

```java
public DatabaseExadbVmClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference">DatabaseExadbVmClusterTimeoutsOutputReference</a>

---

##### `vipIds`<sup>Required</sup> <a name="vipIds" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.vipIds"></a>

```java
public java.util.List<java.lang.String> getVipIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.availabilityDomainInput"></a>

```java
public java.lang.String getAvailabilityDomainInput();
```

- *Type:* java.lang.String

---

##### `backupNetworkNsgIdsInput`<sup>Optional</sup> <a name="backupNetworkNsgIdsInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.backupNetworkNsgIdsInput"></a>

```java
public java.util.List<java.lang.String> getBackupNetworkNsgIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backupSubnetIdInput`<sup>Optional</sup> <a name="backupSubnetIdInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.backupSubnetIdInput"></a>

```java
public java.lang.String getBackupSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.clusterNameInput"></a>

```java
public java.lang.String getClusterNameInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `dataCollectionOptionsInput`<sup>Optional</sup> <a name="dataCollectionOptionsInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.dataCollectionOptionsInput"></a>

```java
public DatabaseExadbVmClusterDataCollectionOptions getDataCollectionOptionsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions">DatabaseExadbVmClusterDataCollectionOptions</a>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `exascaleDbStorageVaultIdInput`<sup>Optional</sup> <a name="exascaleDbStorageVaultIdInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.exascaleDbStorageVaultIdInput"></a>

```java
public java.lang.String getExascaleDbStorageVaultIdInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `gridImageIdInput`<sup>Optional</sup> <a name="gridImageIdInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.gridImageIdInput"></a>

```java
public java.lang.String getGridImageIdInput();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `licenseModelInput`<sup>Optional</sup> <a name="licenseModelInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.licenseModelInput"></a>

```java
public java.lang.String getLicenseModelInput();
```

- *Type:* java.lang.String

---

##### `nodeConfigInput`<sup>Optional</sup> <a name="nodeConfigInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.nodeConfigInput"></a>

```java
public DatabaseExadbVmClusterNodeConfig getNodeConfigInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig">DatabaseExadbVmClusterNodeConfig</a>

---

##### `nodeResourceInput`<sup>Optional</sup> <a name="nodeResourceInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.nodeResourceInput"></a>

```java
public java.lang.Object getNodeResourceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResource">DatabaseExadbVmClusterNodeResource</a>>

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.nsgIdsInput"></a>

```java
public java.util.List<java.lang.String> getNsgIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateZoneIdInput`<sup>Optional</sup> <a name="privateZoneIdInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.privateZoneIdInput"></a>

```java
public java.lang.String getPrivateZoneIdInput();
```

- *Type:* java.lang.String

---

##### `scanListenerPortTcpInput`<sup>Optional</sup> <a name="scanListenerPortTcpInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.scanListenerPortTcpInput"></a>

```java
public java.lang.Number getScanListenerPortTcpInput();
```

- *Type:* java.lang.Number

---

##### `scanListenerPortTcpSslInput`<sup>Optional</sup> <a name="scanListenerPortTcpSslInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.scanListenerPortTcpSslInput"></a>

```java
public java.lang.Number getScanListenerPortTcpSslInput();
```

- *Type:* java.lang.Number

---

##### `securityAttributesInput`<sup>Optional</sup> <a name="securityAttributesInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.securityAttributesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecurityAttributesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `shapeInput`<sup>Optional</sup> <a name="shapeInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.shapeInput"></a>

```java
public java.lang.String getShapeInput();
```

- *Type:* java.lang.String

---

##### `sshPublicKeysInput`<sup>Optional</sup> <a name="sshPublicKeysInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.sshPublicKeysInput"></a>

```java
public java.util.List<java.lang.String> getSshPublicKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `systemVersionInput`<sup>Optional</sup> <a name="systemVersionInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.systemVersionInput"></a>

```java
public java.lang.String getSystemVersionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts">DatabaseExadbVmClusterTimeouts</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `backupNetworkNsgIds`<sup>Required</sup> <a name="backupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.backupNetworkNsgIds"></a>

```java
public java.util.List<java.lang.String> getBackupNetworkNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backupSubnetId`<sup>Required</sup> <a name="backupSubnetId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.backupSubnetId"></a>

```java
public java.lang.String getBackupSubnetId();
```

- *Type:* java.lang.String

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `exascaleDbStorageVaultId`<sup>Required</sup> <a name="exascaleDbStorageVaultId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.exascaleDbStorageVaultId"></a>

```java
public java.lang.String getExascaleDbStorageVaultId();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `gridImageId`<sup>Required</sup> <a name="gridImageId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.gridImageId"></a>

```java
public java.lang.String getGridImageId();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateZoneId`<sup>Required</sup> <a name="privateZoneId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.privateZoneId"></a>

```java
public java.lang.String getPrivateZoneId();
```

- *Type:* java.lang.String

---

##### `scanListenerPortTcp`<sup>Required</sup> <a name="scanListenerPortTcp" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.scanListenerPortTcp"></a>

```java
public java.lang.Number getScanListenerPortTcp();
```

- *Type:* java.lang.Number

---

##### `scanListenerPortTcpSsl`<sup>Required</sup> <a name="scanListenerPortTcpSsl" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.scanListenerPortTcpSsl"></a>

```java
public java.lang.Number getScanListenerPortTcpSsl();
```

- *Type:* java.lang.Number

---

##### `securityAttributes`<sup>Required</sup> <a name="securityAttributes" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.securityAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecurityAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `sshPublicKeys`<sup>Required</sup> <a name="sshPublicKeys" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.sshPublicKeys"></a>

```java
public java.util.List<java.lang.String> getSshPublicKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `systemVersion`<sup>Required</sup> <a name="systemVersion" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.systemVersion"></a>

```java
public java.lang.String getSystemVersion();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseExadbVmClusterConfig <a name="DatabaseExadbVmClusterConfig" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadb_vm_cluster.DatabaseExadbVmClusterConfig;

DatabaseExadbVmClusterConfig.builder()
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
    .availabilityDomain(java.lang.String)
    .backupSubnetId(java.lang.String)
    .compartmentId(java.lang.String)
    .displayName(java.lang.String)
    .exascaleDbStorageVaultId(java.lang.String)
    .gridImageId(java.lang.String)
    .hostname(java.lang.String)
    .nodeConfig(DatabaseExadbVmClusterNodeConfig)
    .shape(java.lang.String)
    .sshPublicKeys(java.util.List<java.lang.String>)
    .subnetId(java.lang.String)
//  .backupNetworkNsgIds(java.util.List<java.lang.String>)
//  .clusterName(java.lang.String)
//  .dataCollectionOptions(DatabaseExadbVmClusterDataCollectionOptions)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .domain(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .licenseModel(java.lang.String)
//  .nodeResource(IResolvable)
//  .nodeResource(java.util.List<DatabaseExadbVmClusterNodeResource>)
//  .nsgIds(java.util.List<java.lang.String>)
//  .privateZoneId(java.lang.String)
//  .scanListenerPortTcp(java.lang.Number)
//  .scanListenerPortTcpSsl(java.lang.Number)
//  .securityAttributes(java.util.Map<java.lang.String, java.lang.String>)
//  .systemVersion(java.lang.String)
//  .timeouts(DatabaseExadbVmClusterTimeouts)
//  .timeZone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#availability_domain DatabaseExadbVmCluster#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.backupSubnetId">backupSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#backup_subnet_id DatabaseExadbVmCluster#backup_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#compartment_id DatabaseExadbVmCluster#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#display_name DatabaseExadbVmCluster#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.exascaleDbStorageVaultId">exascaleDbStorageVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#exascale_db_storage_vault_id DatabaseExadbVmCluster#exascale_db_storage_vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.gridImageId">gridImageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#grid_image_id DatabaseExadbVmCluster#grid_image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#hostname DatabaseExadbVmCluster#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.nodeConfig">nodeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig">DatabaseExadbVmClusterNodeConfig</a></code> | node_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.shape">shape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#shape DatabaseExadbVmCluster#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.sshPublicKeys">sshPublicKeys</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#ssh_public_keys DatabaseExadbVmCluster#ssh_public_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#subnet_id DatabaseExadbVmCluster#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.backupNetworkNsgIds">backupNetworkNsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#backup_network_nsg_ids DatabaseExadbVmCluster#backup_network_nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#cluster_name DatabaseExadbVmCluster#cluster_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.dataCollectionOptions">dataCollectionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions">DatabaseExadbVmClusterDataCollectionOptions</a></code> | data_collection_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#defined_tags DatabaseExadbVmCluster#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#domain DatabaseExadbVmCluster#domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#freeform_tags DatabaseExadbVmCluster#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#id DatabaseExadbVmCluster#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#license_model DatabaseExadbVmCluster#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.nodeResource">nodeResource</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResource">DatabaseExadbVmClusterNodeResource</a>></code> | node_resource block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#nsg_ids DatabaseExadbVmCluster#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.privateZoneId">privateZoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#private_zone_id DatabaseExadbVmCluster#private_zone_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.scanListenerPortTcp">scanListenerPortTcp</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#scan_listener_port_tcp DatabaseExadbVmCluster#scan_listener_port_tcp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.scanListenerPortTcpSsl">scanListenerPortTcpSsl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#scan_listener_port_tcp_ssl DatabaseExadbVmCluster#scan_listener_port_tcp_ssl}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.securityAttributes">securityAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#security_attributes DatabaseExadbVmCluster#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.systemVersion">systemVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#system_version DatabaseExadbVmCluster#system_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts">DatabaseExadbVmClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#time_zone DatabaseExadbVmCluster#time_zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#availability_domain DatabaseExadbVmCluster#availability_domain}.

---

##### `backupSubnetId`<sup>Required</sup> <a name="backupSubnetId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.backupSubnetId"></a>

```java
public java.lang.String getBackupSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#backup_subnet_id DatabaseExadbVmCluster#backup_subnet_id}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#compartment_id DatabaseExadbVmCluster#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#display_name DatabaseExadbVmCluster#display_name}.

---

##### `exascaleDbStorageVaultId`<sup>Required</sup> <a name="exascaleDbStorageVaultId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.exascaleDbStorageVaultId"></a>

```java
public java.lang.String getExascaleDbStorageVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#exascale_db_storage_vault_id DatabaseExadbVmCluster#exascale_db_storage_vault_id}.

---

##### `gridImageId`<sup>Required</sup> <a name="gridImageId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.gridImageId"></a>

```java
public java.lang.String getGridImageId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#grid_image_id DatabaseExadbVmCluster#grid_image_id}.

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#hostname DatabaseExadbVmCluster#hostname}.

---

##### `nodeConfig`<sup>Required</sup> <a name="nodeConfig" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.nodeConfig"></a>

```java
public DatabaseExadbVmClusterNodeConfig getNodeConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig">DatabaseExadbVmClusterNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#node_config DatabaseExadbVmCluster#node_config}

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#shape DatabaseExadbVmCluster#shape}.

---

##### `sshPublicKeys`<sup>Required</sup> <a name="sshPublicKeys" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.sshPublicKeys"></a>

```java
public java.util.List<java.lang.String> getSshPublicKeys();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#ssh_public_keys DatabaseExadbVmCluster#ssh_public_keys}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#subnet_id DatabaseExadbVmCluster#subnet_id}.

---

##### `backupNetworkNsgIds`<sup>Optional</sup> <a name="backupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.backupNetworkNsgIds"></a>

```java
public java.util.List<java.lang.String> getBackupNetworkNsgIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#backup_network_nsg_ids DatabaseExadbVmCluster#backup_network_nsg_ids}.

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#cluster_name DatabaseExadbVmCluster#cluster_name}.

---

##### `dataCollectionOptions`<sup>Optional</sup> <a name="dataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.dataCollectionOptions"></a>

```java
public DatabaseExadbVmClusterDataCollectionOptions getDataCollectionOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions">DatabaseExadbVmClusterDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#data_collection_options DatabaseExadbVmCluster#data_collection_options}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#defined_tags DatabaseExadbVmCluster#defined_tags}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#domain DatabaseExadbVmCluster#domain}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#freeform_tags DatabaseExadbVmCluster#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#id DatabaseExadbVmCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#license_model DatabaseExadbVmCluster#license_model}.

---

##### `nodeResource`<sup>Optional</sup> <a name="nodeResource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.nodeResource"></a>

```java
public java.lang.Object getNodeResource();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResource">DatabaseExadbVmClusterNodeResource</a>>

node_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#node_resource DatabaseExadbVmCluster#node_resource}

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#nsg_ids DatabaseExadbVmCluster#nsg_ids}.

---

##### `privateZoneId`<sup>Optional</sup> <a name="privateZoneId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.privateZoneId"></a>

```java
public java.lang.String getPrivateZoneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#private_zone_id DatabaseExadbVmCluster#private_zone_id}.

---

##### `scanListenerPortTcp`<sup>Optional</sup> <a name="scanListenerPortTcp" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.scanListenerPortTcp"></a>

```java
public java.lang.Number getScanListenerPortTcp();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#scan_listener_port_tcp DatabaseExadbVmCluster#scan_listener_port_tcp}.

---

##### `scanListenerPortTcpSsl`<sup>Optional</sup> <a name="scanListenerPortTcpSsl" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.scanListenerPortTcpSsl"></a>

```java
public java.lang.Number getScanListenerPortTcpSsl();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#scan_listener_port_tcp_ssl DatabaseExadbVmCluster#scan_listener_port_tcp_ssl}.

---

##### `securityAttributes`<sup>Optional</sup> <a name="securityAttributes" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.securityAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecurityAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#security_attributes DatabaseExadbVmCluster#security_attributes}.

---

##### `systemVersion`<sup>Optional</sup> <a name="systemVersion" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.systemVersion"></a>

```java
public java.lang.String getSystemVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#system_version DatabaseExadbVmCluster#system_version}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.timeouts"></a>

```java
public DatabaseExadbVmClusterTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts">DatabaseExadbVmClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#timeouts DatabaseExadbVmCluster#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#time_zone DatabaseExadbVmCluster#time_zone}.

---

### DatabaseExadbVmClusterDataCollectionOptions <a name="DatabaseExadbVmClusterDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadb_vm_cluster.DatabaseExadbVmClusterDataCollectionOptions;

DatabaseExadbVmClusterDataCollectionOptions.builder()
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
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions.property.isDiagnosticsEventsEnabled">isDiagnosticsEventsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#is_diagnostics_events_enabled DatabaseExadbVmCluster#is_diagnostics_events_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions.property.isHealthMonitoringEnabled">isHealthMonitoringEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#is_health_monitoring_enabled DatabaseExadbVmCluster#is_health_monitoring_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions.property.isIncidentLogsEnabled">isIncidentLogsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#is_incident_logs_enabled DatabaseExadbVmCluster#is_incident_logs_enabled}. |

---

##### `isDiagnosticsEventsEnabled`<sup>Optional</sup> <a name="isDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions.property.isDiagnosticsEventsEnabled"></a>

```java
public java.lang.Object getIsDiagnosticsEventsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#is_diagnostics_events_enabled DatabaseExadbVmCluster#is_diagnostics_events_enabled}.

---

##### `isHealthMonitoringEnabled`<sup>Optional</sup> <a name="isHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions.property.isHealthMonitoringEnabled"></a>

```java
public java.lang.Object getIsHealthMonitoringEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#is_health_monitoring_enabled DatabaseExadbVmCluster#is_health_monitoring_enabled}.

---

##### `isIncidentLogsEnabled`<sup>Optional</sup> <a name="isIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions.property.isIncidentLogsEnabled"></a>

```java
public java.lang.Object getIsIncidentLogsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#is_incident_logs_enabled DatabaseExadbVmCluster#is_incident_logs_enabled}.

---

### DatabaseExadbVmClusterIormConfigCache <a name="DatabaseExadbVmClusterIormConfigCache" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCache"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCache.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadb_vm_cluster.DatabaseExadbVmClusterIormConfigCache;

DatabaseExadbVmClusterIormConfigCache.builder()
    .build();
```


### DatabaseExadbVmClusterIormConfigCacheDbPlans <a name="DatabaseExadbVmClusterIormConfigCacheDbPlans" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlans.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadb_vm_cluster.DatabaseExadbVmClusterIormConfigCacheDbPlans;

DatabaseExadbVmClusterIormConfigCacheDbPlans.builder()
    .build();
```


### DatabaseExadbVmClusterNodeConfig <a name="DatabaseExadbVmClusterNodeConfig" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadb_vm_cluster.DatabaseExadbVmClusterNodeConfig;

DatabaseExadbVmClusterNodeConfig.builder()
    .enabledEcpuCountPerNode(java.lang.Number)
    .totalEcpuCountPerNode(java.lang.Number)
    .vmFileSystemStorageSizeGbsPerNode(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig.property.enabledEcpuCountPerNode">enabledEcpuCountPerNode</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#enabled_ecpu_count_per_node DatabaseExadbVmCluster#enabled_ecpu_count_per_node}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig.property.totalEcpuCountPerNode">totalEcpuCountPerNode</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#total_ecpu_count_per_node DatabaseExadbVmCluster#total_ecpu_count_per_node}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig.property.vmFileSystemStorageSizeGbsPerNode">vmFileSystemStorageSizeGbsPerNode</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#vm_file_system_storage_size_gbs_per_node DatabaseExadbVmCluster#vm_file_system_storage_size_gbs_per_node}. |

---

##### `enabledEcpuCountPerNode`<sup>Required</sup> <a name="enabledEcpuCountPerNode" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig.property.enabledEcpuCountPerNode"></a>

```java
public java.lang.Number getEnabledEcpuCountPerNode();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#enabled_ecpu_count_per_node DatabaseExadbVmCluster#enabled_ecpu_count_per_node}.

---

##### `totalEcpuCountPerNode`<sup>Required</sup> <a name="totalEcpuCountPerNode" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig.property.totalEcpuCountPerNode"></a>

```java
public java.lang.Number getTotalEcpuCountPerNode();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#total_ecpu_count_per_node DatabaseExadbVmCluster#total_ecpu_count_per_node}.

---

##### `vmFileSystemStorageSizeGbsPerNode`<sup>Required</sup> <a name="vmFileSystemStorageSizeGbsPerNode" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig.property.vmFileSystemStorageSizeGbsPerNode"></a>

```java
public java.lang.Number getVmFileSystemStorageSizeGbsPerNode();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#vm_file_system_storage_size_gbs_per_node DatabaseExadbVmCluster#vm_file_system_storage_size_gbs_per_node}.

---

### DatabaseExadbVmClusterNodeResource <a name="DatabaseExadbVmClusterNodeResource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadb_vm_cluster.DatabaseExadbVmClusterNodeResource;

DatabaseExadbVmClusterNodeResource.builder()
    .nodeName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResource.property.nodeName">nodeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#node_name DatabaseExadbVmCluster#node_name}. |

---

##### `nodeName`<sup>Required</sup> <a name="nodeName" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResource.property.nodeName"></a>

```java
public java.lang.String getNodeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#node_name DatabaseExadbVmCluster#node_name}.

---

### DatabaseExadbVmClusterTimeouts <a name="DatabaseExadbVmClusterTimeouts" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadb_vm_cluster.DatabaseExadbVmClusterTimeouts;

DatabaseExadbVmClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#create DatabaseExadbVmCluster#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#delete DatabaseExadbVmCluster#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#update DatabaseExadbVmCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#create DatabaseExadbVmCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#delete DatabaseExadbVmCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#update DatabaseExadbVmCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseExadbVmClusterDataCollectionOptionsOutputReference <a name="DatabaseExadbVmClusterDataCollectionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadb_vm_cluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference;

new DatabaseExadbVmClusterDataCollectionOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled">resetIsDiagnosticsEventsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled">resetIsHealthMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled">resetIsIncidentLogsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsDiagnosticsEventsEnabled` <a name="resetIsDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled"></a>

```java
public void resetIsDiagnosticsEventsEnabled()
```

##### `resetIsHealthMonitoringEnabled` <a name="resetIsHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled"></a>

```java
public void resetIsHealthMonitoringEnabled()
```

##### `resetIsIncidentLogsEnabled` <a name="resetIsIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled"></a>

```java
public void resetIsIncidentLogsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput">isDiagnosticsEventsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput">isHealthMonitoringEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput">isIncidentLogsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">isDiagnosticsEventsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">isHealthMonitoringEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">isIncidentLogsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions">DatabaseExadbVmClusterDataCollectionOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isDiagnosticsEventsEnabledInput`<sup>Optional</sup> <a name="isDiagnosticsEventsEnabledInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput"></a>

```java
public java.lang.Object getIsDiagnosticsEventsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isHealthMonitoringEnabledInput`<sup>Optional</sup> <a name="isHealthMonitoringEnabledInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput"></a>

```java
public java.lang.Object getIsHealthMonitoringEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isIncidentLogsEnabledInput`<sup>Optional</sup> <a name="isIncidentLogsEnabledInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput"></a>

```java
public java.lang.Object getIsIncidentLogsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isDiagnosticsEventsEnabled`<sup>Required</sup> <a name="isDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```java
public java.lang.Object getIsDiagnosticsEventsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isHealthMonitoringEnabled`<sup>Required</sup> <a name="isHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```java
public java.lang.Object getIsHealthMonitoringEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isIncidentLogsEnabled`<sup>Required</sup> <a name="isIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```java
public java.lang.Object getIsIncidentLogsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.internalValue"></a>

```java
public DatabaseExadbVmClusterDataCollectionOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions">DatabaseExadbVmClusterDataCollectionOptions</a>

---


### DatabaseExadbVmClusterIormConfigCacheDbPlansList <a name="DatabaseExadbVmClusterIormConfigCacheDbPlansList" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadb_vm_cluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList;

new DatabaseExadbVmClusterIormConfigCacheDbPlansList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.get"></a>

```java
public DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference <a name="DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadb_vm_cluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference;

new DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.property.dbName">dbName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.property.flashCacheLimit">flashCacheLimit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.property.share">share</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlans">DatabaseExadbVmClusterIormConfigCacheDbPlans</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.property.dbName"></a>

```java
public java.lang.String getDbName();
```

- *Type:* java.lang.String

---

##### `flashCacheLimit`<sup>Required</sup> <a name="flashCacheLimit" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.property.flashCacheLimit"></a>

```java
public java.lang.String getFlashCacheLimit();
```

- *Type:* java.lang.String

---

##### `share`<sup>Required</sup> <a name="share" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.property.share"></a>

```java
public java.lang.Number getShare();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.property.internalValue"></a>

```java
public DatabaseExadbVmClusterIormConfigCacheDbPlans getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlans">DatabaseExadbVmClusterIormConfigCacheDbPlans</a>

---


### DatabaseExadbVmClusterIormConfigCacheList <a name="DatabaseExadbVmClusterIormConfigCacheList" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadb_vm_cluster.DatabaseExadbVmClusterIormConfigCacheList;

new DatabaseExadbVmClusterIormConfigCacheList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.get"></a>

```java
public DatabaseExadbVmClusterIormConfigCacheOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseExadbVmClusterIormConfigCacheOutputReference <a name="DatabaseExadbVmClusterIormConfigCacheOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadb_vm_cluster.DatabaseExadbVmClusterIormConfigCacheOutputReference;

new DatabaseExadbVmClusterIormConfigCacheOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.property.dbPlans">dbPlans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList">DatabaseExadbVmClusterIormConfigCacheDbPlansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.property.objective">objective</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCache">DatabaseExadbVmClusterIormConfigCache</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dbPlans`<sup>Required</sup> <a name="dbPlans" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.property.dbPlans"></a>

```java
public DatabaseExadbVmClusterIormConfigCacheDbPlansList getDbPlans();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList">DatabaseExadbVmClusterIormConfigCacheDbPlansList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `objective`<sup>Required</sup> <a name="objective" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.property.objective"></a>

```java
public java.lang.String getObjective();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.property.internalValue"></a>

```java
public DatabaseExadbVmClusterIormConfigCache getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCache">DatabaseExadbVmClusterIormConfigCache</a>

---


### DatabaseExadbVmClusterNodeConfigOutputReference <a name="DatabaseExadbVmClusterNodeConfigOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadb_vm_cluster.DatabaseExadbVmClusterNodeConfigOutputReference;

new DatabaseExadbVmClusterNodeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.memorySizeInGbsPerNode">memorySizeInGbsPerNode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.snapshotFileSystemStorageSizeGbsPerNode">snapshotFileSystemStorageSizeGbsPerNode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.totalFileSystemStorageSizeGbsPerNode">totalFileSystemStorageSizeGbsPerNode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.enabledEcpuCountPerNodeInput">enabledEcpuCountPerNodeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.totalEcpuCountPerNodeInput">totalEcpuCountPerNodeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.vmFileSystemStorageSizeGbsPerNodeInput">vmFileSystemStorageSizeGbsPerNodeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.enabledEcpuCountPerNode">enabledEcpuCountPerNode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.totalEcpuCountPerNode">totalEcpuCountPerNode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.vmFileSystemStorageSizeGbsPerNode">vmFileSystemStorageSizeGbsPerNode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig">DatabaseExadbVmClusterNodeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `memorySizeInGbsPerNode`<sup>Required</sup> <a name="memorySizeInGbsPerNode" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.memorySizeInGbsPerNode"></a>

```java
public java.lang.Number getMemorySizeInGbsPerNode();
```

- *Type:* java.lang.Number

---

##### `snapshotFileSystemStorageSizeGbsPerNode`<sup>Required</sup> <a name="snapshotFileSystemStorageSizeGbsPerNode" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.snapshotFileSystemStorageSizeGbsPerNode"></a>

```java
public java.lang.Number getSnapshotFileSystemStorageSizeGbsPerNode();
```

- *Type:* java.lang.Number

---

##### `totalFileSystemStorageSizeGbsPerNode`<sup>Required</sup> <a name="totalFileSystemStorageSizeGbsPerNode" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.totalFileSystemStorageSizeGbsPerNode"></a>

```java
public java.lang.Number getTotalFileSystemStorageSizeGbsPerNode();
```

- *Type:* java.lang.Number

---

##### `enabledEcpuCountPerNodeInput`<sup>Optional</sup> <a name="enabledEcpuCountPerNodeInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.enabledEcpuCountPerNodeInput"></a>

```java
public java.lang.Number getEnabledEcpuCountPerNodeInput();
```

- *Type:* java.lang.Number

---

##### `totalEcpuCountPerNodeInput`<sup>Optional</sup> <a name="totalEcpuCountPerNodeInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.totalEcpuCountPerNodeInput"></a>

```java
public java.lang.Number getTotalEcpuCountPerNodeInput();
```

- *Type:* java.lang.Number

---

##### `vmFileSystemStorageSizeGbsPerNodeInput`<sup>Optional</sup> <a name="vmFileSystemStorageSizeGbsPerNodeInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.vmFileSystemStorageSizeGbsPerNodeInput"></a>

```java
public java.lang.Number getVmFileSystemStorageSizeGbsPerNodeInput();
```

- *Type:* java.lang.Number

---

##### `enabledEcpuCountPerNode`<sup>Required</sup> <a name="enabledEcpuCountPerNode" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.enabledEcpuCountPerNode"></a>

```java
public java.lang.Number getEnabledEcpuCountPerNode();
```

- *Type:* java.lang.Number

---

##### `totalEcpuCountPerNode`<sup>Required</sup> <a name="totalEcpuCountPerNode" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.totalEcpuCountPerNode"></a>

```java
public java.lang.Number getTotalEcpuCountPerNode();
```

- *Type:* java.lang.Number

---

##### `vmFileSystemStorageSizeGbsPerNode`<sup>Required</sup> <a name="vmFileSystemStorageSizeGbsPerNode" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.vmFileSystemStorageSizeGbsPerNode"></a>

```java
public java.lang.Number getVmFileSystemStorageSizeGbsPerNode();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.internalValue"></a>

```java
public DatabaseExadbVmClusterNodeConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig">DatabaseExadbVmClusterNodeConfig</a>

---


### DatabaseExadbVmClusterNodeResourceList <a name="DatabaseExadbVmClusterNodeResourceList" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadb_vm_cluster.DatabaseExadbVmClusterNodeResourceList;

new DatabaseExadbVmClusterNodeResourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.get"></a>

```java
public DatabaseExadbVmClusterNodeResourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResource">DatabaseExadbVmClusterNodeResource</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResource">DatabaseExadbVmClusterNodeResource</a>>

---


### DatabaseExadbVmClusterNodeResourceOutputReference <a name="DatabaseExadbVmClusterNodeResourceOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadb_vm_cluster.DatabaseExadbVmClusterNodeResourceOutputReference;

new DatabaseExadbVmClusterNodeResourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.nodeHostname">nodeHostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.nodeId">nodeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.nodeNameInput">nodeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.nodeName">nodeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResource">DatabaseExadbVmClusterNodeResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nodeHostname`<sup>Required</sup> <a name="nodeHostname" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.nodeHostname"></a>

```java
public java.lang.String getNodeHostname();
```

- *Type:* java.lang.String

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.nodeId"></a>

```java
public java.lang.String getNodeId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `nodeNameInput`<sup>Optional</sup> <a name="nodeNameInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.nodeNameInput"></a>

```java
public java.lang.String getNodeNameInput();
```

- *Type:* java.lang.String

---

##### `nodeName`<sup>Required</sup> <a name="nodeName" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.nodeName"></a>

```java
public java.lang.String getNodeName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResource">DatabaseExadbVmClusterNodeResource</a>

---


### DatabaseExadbVmClusterTimeoutsOutputReference <a name="DatabaseExadbVmClusterTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadb_vm_cluster.DatabaseExadbVmClusterTimeoutsOutputReference;

new DatabaseExadbVmClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts">DatabaseExadbVmClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts">DatabaseExadbVmClusterTimeouts</a>

---



