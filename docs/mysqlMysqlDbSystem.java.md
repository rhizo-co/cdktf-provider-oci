# `mysqlMysqlDbSystem` Submodule <a name="`mysqlMysqlDbSystem` Submodule" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MysqlMysqlDbSystem <a name="MysqlMysqlDbSystem" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system oci_mysql_mysql_db_system}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystem;

MysqlMysqlDbSystem.Builder.create(Construct scope, java.lang.String id)
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
    .compartmentId(java.lang.String)
    .shapeName(java.lang.String)
    .subnetId(java.lang.String)
//  .adminPassword(java.lang.String)
//  .adminUsername(java.lang.String)
//  .backupPolicy(MysqlMysqlDbSystemBackupPolicy)
//  .configurationId(java.lang.String)
//  .crashRecovery(java.lang.String)
//  .customerContacts(IResolvable)
//  .customerContacts(java.util.List<MysqlMysqlDbSystemCustomerContacts>)
//  .databaseManagement(java.lang.String)
//  .dataStorage(MysqlMysqlDbSystemDataStorage)
//  .dataStorageSizeInGb(java.lang.Number)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .deletionPolicy(IResolvable)
//  .deletionPolicy(java.util.List<MysqlMysqlDbSystemDeletionPolicy>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .faultDomain(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .hostnameLabel(java.lang.String)
//  .id(java.lang.String)
//  .ipAddress(java.lang.String)
//  .isHighlyAvailable(java.lang.Boolean)
//  .isHighlyAvailable(IResolvable)
//  .maintenance(MysqlMysqlDbSystemMaintenance)
//  .mysqlVersion(java.lang.String)
//  .port(java.lang.Number)
//  .portX(java.lang.Number)
//  .secureConnections(MysqlMysqlDbSystemSecureConnections)
//  .shutdownType(java.lang.String)
//  .source(MysqlMysqlDbSystemSource)
//  .state(java.lang.String)
//  .timeouts(MysqlMysqlDbSystemTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#availability_domain MysqlMysqlDbSystem#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#compartment_id MysqlMysqlDbSystem#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.shapeName">shapeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#shape_name MysqlMysqlDbSystem#shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#subnet_id MysqlMysqlDbSystem#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#admin_password MysqlMysqlDbSystem#admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.adminUsername">adminUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#admin_username MysqlMysqlDbSystem#admin_username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.backupPolicy">backupPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy">MysqlMysqlDbSystemBackupPolicy</a></code> | backup_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.configurationId">configurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#configuration_id MysqlMysqlDbSystem#configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.crashRecovery">crashRecovery</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#crash_recovery MysqlMysqlDbSystem#crash_recovery}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.customerContacts">customerContacts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts">MysqlMysqlDbSystemCustomerContacts</a>></code> | customer_contacts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.databaseManagement">databaseManagement</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#database_management MysqlMysqlDbSystem#database_management}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.dataStorage">dataStorage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage">MysqlMysqlDbSystemDataStorage</a></code> | data_storage block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.dataStorageSizeInGb">dataStorageSizeInGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#data_storage_size_in_gb MysqlMysqlDbSystem#data_storage_size_in_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#defined_tags MysqlMysqlDbSystem#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy">MysqlMysqlDbSystemDeletionPolicy</a>></code> | deletion_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#description MysqlMysqlDbSystem#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#display_name MysqlMysqlDbSystem#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.faultDomain">faultDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#fault_domain MysqlMysqlDbSystem#fault_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#freeform_tags MysqlMysqlDbSystem#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.hostnameLabel">hostnameLabel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#hostname_label MysqlMysqlDbSystem#hostname_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#id MysqlMysqlDbSystem#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#ip_address MysqlMysqlDbSystem#ip_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.isHighlyAvailable">isHighlyAvailable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_highly_available MysqlMysqlDbSystem#is_highly_available}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.maintenance">maintenance</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance">MysqlMysqlDbSystemMaintenance</a></code> | maintenance block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.mysqlVersion">mysqlVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#mysql_version MysqlMysqlDbSystem#mysql_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#port MysqlMysqlDbSystem#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.portX">portX</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#port_x MysqlMysqlDbSystem#port_x}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.secureConnections">secureConnections</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections">MysqlMysqlDbSystemSecureConnections</a></code> | secure_connections block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.shutdownType">shutdownType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#shutdown_type MysqlMysqlDbSystem#shutdown_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource">MysqlMysqlDbSystemSource</a></code> | source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#state MysqlMysqlDbSystem#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts">MysqlMysqlDbSystemTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.availabilityDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#availability_domain MysqlMysqlDbSystem#availability_domain}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#compartment_id MysqlMysqlDbSystem#compartment_id}.

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.shapeName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#shape_name MysqlMysqlDbSystem#shape_name}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#subnet_id MysqlMysqlDbSystem#subnet_id}.

---

##### `adminPassword`<sup>Optional</sup> <a name="adminPassword" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.adminPassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#admin_password MysqlMysqlDbSystem#admin_password}.

---

##### `adminUsername`<sup>Optional</sup> <a name="adminUsername" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.adminUsername"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#admin_username MysqlMysqlDbSystem#admin_username}.

---

##### `backupPolicy`<sup>Optional</sup> <a name="backupPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.backupPolicy"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy">MysqlMysqlDbSystemBackupPolicy</a>

backup_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#backup_policy MysqlMysqlDbSystem#backup_policy}

---

##### `configurationId`<sup>Optional</sup> <a name="configurationId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.configurationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#configuration_id MysqlMysqlDbSystem#configuration_id}.

---

##### `crashRecovery`<sup>Optional</sup> <a name="crashRecovery" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.crashRecovery"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#crash_recovery MysqlMysqlDbSystem#crash_recovery}.

---

##### `customerContacts`<sup>Optional</sup> <a name="customerContacts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.customerContacts"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts">MysqlMysqlDbSystemCustomerContacts</a>>

customer_contacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#customer_contacts MysqlMysqlDbSystem#customer_contacts}

---

##### `databaseManagement`<sup>Optional</sup> <a name="databaseManagement" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.databaseManagement"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#database_management MysqlMysqlDbSystem#database_management}.

---

##### `dataStorage`<sup>Optional</sup> <a name="dataStorage" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.dataStorage"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage">MysqlMysqlDbSystemDataStorage</a>

data_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#data_storage MysqlMysqlDbSystem#data_storage}

---

##### `dataStorageSizeInGb`<sup>Optional</sup> <a name="dataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.dataStorageSizeInGb"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#data_storage_size_in_gb MysqlMysqlDbSystem#data_storage_size_in_gb}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#defined_tags MysqlMysqlDbSystem#defined_tags}.

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.deletionPolicy"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy">MysqlMysqlDbSystemDeletionPolicy</a>>

deletion_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#deletion_policy MysqlMysqlDbSystem#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#description MysqlMysqlDbSystem#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#display_name MysqlMysqlDbSystem#display_name}.

---

##### `faultDomain`<sup>Optional</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.faultDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#fault_domain MysqlMysqlDbSystem#fault_domain}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#freeform_tags MysqlMysqlDbSystem#freeform_tags}.

---

##### `hostnameLabel`<sup>Optional</sup> <a name="hostnameLabel" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.hostnameLabel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#hostname_label MysqlMysqlDbSystem#hostname_label}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#id MysqlMysqlDbSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.ipAddress"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#ip_address MysqlMysqlDbSystem#ip_address}.

---

##### `isHighlyAvailable`<sup>Optional</sup> <a name="isHighlyAvailable" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.isHighlyAvailable"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_highly_available MysqlMysqlDbSystem#is_highly_available}.

---

##### `maintenance`<sup>Optional</sup> <a name="maintenance" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.maintenance"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance">MysqlMysqlDbSystemMaintenance</a>

maintenance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#maintenance MysqlMysqlDbSystem#maintenance}

---

##### `mysqlVersion`<sup>Optional</sup> <a name="mysqlVersion" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.mysqlVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#mysql_version MysqlMysqlDbSystem#mysql_version}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#port MysqlMysqlDbSystem#port}.

---

##### `portX`<sup>Optional</sup> <a name="portX" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.portX"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#port_x MysqlMysqlDbSystem#port_x}.

---

##### `secureConnections`<sup>Optional</sup> <a name="secureConnections" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.secureConnections"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections">MysqlMysqlDbSystemSecureConnections</a>

secure_connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#secure_connections MysqlMysqlDbSystem#secure_connections}

---

##### `shutdownType`<sup>Optional</sup> <a name="shutdownType" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.shutdownType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#shutdown_type MysqlMysqlDbSystem#shutdown_type}.

---

##### `source`<sup>Optional</sup> <a name="source" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.source"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource">MysqlMysqlDbSystemSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#source MysqlMysqlDbSystem#source}

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#state MysqlMysqlDbSystem#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts">MysqlMysqlDbSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#timeouts MysqlMysqlDbSystem#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putBackupPolicy">putBackupPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putCustomerContacts">putCustomerContacts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putDataStorage">putDataStorage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putDeletionPolicy">putDeletionPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putMaintenance">putMaintenance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putSecureConnections">putSecureConnections</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putSource">putSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetAdminPassword">resetAdminPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetAdminUsername">resetAdminUsername</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetBackupPolicy">resetBackupPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetConfigurationId">resetConfigurationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetCrashRecovery">resetCrashRecovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetCustomerContacts">resetCustomerContacts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDatabaseManagement">resetDatabaseManagement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDataStorage">resetDataStorage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDataStorageSizeInGb">resetDataStorageSizeInGb</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetFaultDomain">resetFaultDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetHostnameLabel">resetHostnameLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetIsHighlyAvailable">resetIsHighlyAvailable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetMaintenance">resetMaintenance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetMysqlVersion">resetMysqlVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetPortX">resetPortX</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetSecureConnections">resetSecureConnections</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetShutdownType">resetShutdownType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackupPolicy` <a name="putBackupPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putBackupPolicy"></a>

```java
public void putBackupPolicy(MysqlMysqlDbSystemBackupPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putBackupPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy">MysqlMysqlDbSystemBackupPolicy</a>

---

##### `putCustomerContacts` <a name="putCustomerContacts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putCustomerContacts"></a>

```java
public void putCustomerContacts(IResolvable OR java.util.List<MysqlMysqlDbSystemCustomerContacts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putCustomerContacts.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts">MysqlMysqlDbSystemCustomerContacts</a>>

---

##### `putDataStorage` <a name="putDataStorage" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putDataStorage"></a>

```java
public void putDataStorage(MysqlMysqlDbSystemDataStorage value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putDataStorage.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage">MysqlMysqlDbSystemDataStorage</a>

---

##### `putDeletionPolicy` <a name="putDeletionPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putDeletionPolicy"></a>

```java
public void putDeletionPolicy(IResolvable OR java.util.List<MysqlMysqlDbSystemDeletionPolicy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putDeletionPolicy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy">MysqlMysqlDbSystemDeletionPolicy</a>>

---

##### `putMaintenance` <a name="putMaintenance" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putMaintenance"></a>

```java
public void putMaintenance(MysqlMysqlDbSystemMaintenance value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putMaintenance.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance">MysqlMysqlDbSystemMaintenance</a>

---

##### `putSecureConnections` <a name="putSecureConnections" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putSecureConnections"></a>

```java
public void putSecureConnections(MysqlMysqlDbSystemSecureConnections value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putSecureConnections.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections">MysqlMysqlDbSystemSecureConnections</a>

---

##### `putSource` <a name="putSource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putSource"></a>

```java
public void putSource(MysqlMysqlDbSystemSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putSource.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource">MysqlMysqlDbSystemSource</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putTimeouts"></a>

```java
public void putTimeouts(MysqlMysqlDbSystemTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts">MysqlMysqlDbSystemTimeouts</a>

---

##### `resetAdminPassword` <a name="resetAdminPassword" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetAdminPassword"></a>

```java
public void resetAdminPassword()
```

##### `resetAdminUsername` <a name="resetAdminUsername" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetAdminUsername"></a>

```java
public void resetAdminUsername()
```

##### `resetBackupPolicy` <a name="resetBackupPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetBackupPolicy"></a>

```java
public void resetBackupPolicy()
```

##### `resetConfigurationId` <a name="resetConfigurationId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetConfigurationId"></a>

```java
public void resetConfigurationId()
```

##### `resetCrashRecovery` <a name="resetCrashRecovery" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetCrashRecovery"></a>

```java
public void resetCrashRecovery()
```

##### `resetCustomerContacts` <a name="resetCustomerContacts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetCustomerContacts"></a>

```java
public void resetCustomerContacts()
```

##### `resetDatabaseManagement` <a name="resetDatabaseManagement" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDatabaseManagement"></a>

```java
public void resetDatabaseManagement()
```

##### `resetDataStorage` <a name="resetDataStorage" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDataStorage"></a>

```java
public void resetDataStorage()
```

##### `resetDataStorageSizeInGb` <a name="resetDataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDataStorageSizeInGb"></a>

```java
public void resetDataStorageSizeInGb()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFaultDomain` <a name="resetFaultDomain" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetFaultDomain"></a>

```java
public void resetFaultDomain()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetHostnameLabel` <a name="resetHostnameLabel" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetHostnameLabel"></a>

```java
public void resetHostnameLabel()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetId"></a>

```java
public void resetId()
```

##### `resetIpAddress` <a name="resetIpAddress" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetIpAddress"></a>

```java
public void resetIpAddress()
```

##### `resetIsHighlyAvailable` <a name="resetIsHighlyAvailable" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetIsHighlyAvailable"></a>

```java
public void resetIsHighlyAvailable()
```

##### `resetMaintenance` <a name="resetMaintenance" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetMaintenance"></a>

```java
public void resetMaintenance()
```

##### `resetMysqlVersion` <a name="resetMysqlVersion" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetMysqlVersion"></a>

```java
public void resetMysqlVersion()
```

##### `resetPort` <a name="resetPort" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetPort"></a>

```java
public void resetPort()
```

##### `resetPortX` <a name="resetPortX" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetPortX"></a>

```java
public void resetPortX()
```

##### `resetSecureConnections` <a name="resetSecureConnections" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetSecureConnections"></a>

```java
public void resetSecureConnections()
```

##### `resetShutdownType` <a name="resetShutdownType" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetShutdownType"></a>

```java
public void resetShutdownType()
```

##### `resetSource` <a name="resetSource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetSource"></a>

```java
public void resetSource()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetState"></a>

```java
public void resetState()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MysqlMysqlDbSystem resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystem;

MysqlMysqlDbSystem.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystem;

MysqlMysqlDbSystem.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystem;

MysqlMysqlDbSystem.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystem;

MysqlMysqlDbSystem.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MysqlMysqlDbSystem.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MysqlMysqlDbSystem resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MysqlMysqlDbSystem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MysqlMysqlDbSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MysqlMysqlDbSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.backupPolicy">backupPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference">MysqlMysqlDbSystemBackupPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.channels">channels</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList">MysqlMysqlDbSystemChannelsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.currentPlacement">currentPlacement</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList">MysqlMysqlDbSystemCurrentPlacementList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.customerContacts">customerContacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList">MysqlMysqlDbSystemCustomerContactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.dataStorage">dataStorage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference">MysqlMysqlDbSystemDataStorageOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.deletionPolicy">deletionPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList">MysqlMysqlDbSystemDeletionPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.endpoints">endpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList">MysqlMysqlDbSystemEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.heatWaveCluster">heatWaveCluster</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList">MysqlMysqlDbSystemHeatWaveClusterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.isHeatWaveClusterAttached">isHeatWaveClusterAttached</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.maintenance">maintenance</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference">MysqlMysqlDbSystemMaintenanceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.pointInTimeRecoveryDetails">pointInTimeRecoveryDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList">MysqlMysqlDbSystemPointInTimeRecoveryDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.secureConnections">secureConnections</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference">MysqlMysqlDbSystemSecureConnectionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference">MysqlMysqlDbSystemSourceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference">MysqlMysqlDbSystemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.adminPasswordInput">adminPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.adminUsernameInput">adminUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.backupPolicyInput">backupPolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy">MysqlMysqlDbSystemBackupPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.configurationIdInput">configurationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.crashRecoveryInput">crashRecoveryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.customerContactsInput">customerContactsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts">MysqlMysqlDbSystemCustomerContacts</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.databaseManagementInput">databaseManagementInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.dataStorageInput">dataStorageInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage">MysqlMysqlDbSystemDataStorage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.dataStorageSizeInGbInput">dataStorageSizeInGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy">MysqlMysqlDbSystemDeletionPolicy</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.faultDomainInput">faultDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.hostnameLabelInput">hostnameLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.ipAddressInput">ipAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.isHighlyAvailableInput">isHighlyAvailableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.maintenanceInput">maintenanceInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance">MysqlMysqlDbSystemMaintenance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.mysqlVersionInput">mysqlVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.portXInput">portXInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.secureConnectionsInput">secureConnectionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections">MysqlMysqlDbSystemSecureConnections</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.shapeNameInput">shapeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.shutdownTypeInput">shutdownTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.sourceInput">sourceInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource">MysqlMysqlDbSystemSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts">MysqlMysqlDbSystemTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.adminUsername">adminUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.configurationId">configurationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.crashRecovery">crashRecovery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.databaseManagement">databaseManagement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.dataStorageSizeInGb">dataStorageSizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.faultDomain">faultDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.hostnameLabel">hostnameLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.isHighlyAvailable">isHighlyAvailable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.mysqlVersion">mysqlVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.portX">portX</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.shapeName">shapeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.shutdownType">shutdownType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backupPolicy`<sup>Required</sup> <a name="backupPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.backupPolicy"></a>

```java
public MysqlMysqlDbSystemBackupPolicyOutputReference getBackupPolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference">MysqlMysqlDbSystemBackupPolicyOutputReference</a>

---

##### `channels`<sup>Required</sup> <a name="channels" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.channels"></a>

```java
public MysqlMysqlDbSystemChannelsList getChannels();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList">MysqlMysqlDbSystemChannelsList</a>

---

##### `currentPlacement`<sup>Required</sup> <a name="currentPlacement" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.currentPlacement"></a>

```java
public MysqlMysqlDbSystemCurrentPlacementList getCurrentPlacement();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList">MysqlMysqlDbSystemCurrentPlacementList</a>

---

##### `customerContacts`<sup>Required</sup> <a name="customerContacts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.customerContacts"></a>

```java
public MysqlMysqlDbSystemCustomerContactsList getCustomerContacts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList">MysqlMysqlDbSystemCustomerContactsList</a>

---

##### `dataStorage`<sup>Required</sup> <a name="dataStorage" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.dataStorage"></a>

```java
public MysqlMysqlDbSystemDataStorageOutputReference getDataStorage();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference">MysqlMysqlDbSystemDataStorageOutputReference</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.deletionPolicy"></a>

```java
public MysqlMysqlDbSystemDeletionPolicyList getDeletionPolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList">MysqlMysqlDbSystemDeletionPolicyList</a>

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.endpoints"></a>

```java
public MysqlMysqlDbSystemEndpointsList getEndpoints();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList">MysqlMysqlDbSystemEndpointsList</a>

---

##### `heatWaveCluster`<sup>Required</sup> <a name="heatWaveCluster" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.heatWaveCluster"></a>

```java
public MysqlMysqlDbSystemHeatWaveClusterList getHeatWaveCluster();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList">MysqlMysqlDbSystemHeatWaveClusterList</a>

---

##### `isHeatWaveClusterAttached`<sup>Required</sup> <a name="isHeatWaveClusterAttached" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.isHeatWaveClusterAttached"></a>

```java
public IResolvable getIsHeatWaveClusterAttached();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `maintenance`<sup>Required</sup> <a name="maintenance" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.maintenance"></a>

```java
public MysqlMysqlDbSystemMaintenanceOutputReference getMaintenance();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference">MysqlMysqlDbSystemMaintenanceOutputReference</a>

---

##### `pointInTimeRecoveryDetails`<sup>Required</sup> <a name="pointInTimeRecoveryDetails" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.pointInTimeRecoveryDetails"></a>

```java
public MysqlMysqlDbSystemPointInTimeRecoveryDetailsList getPointInTimeRecoveryDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList">MysqlMysqlDbSystemPointInTimeRecoveryDetailsList</a>

---

##### `secureConnections`<sup>Required</sup> <a name="secureConnections" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.secureConnections"></a>

```java
public MysqlMysqlDbSystemSecureConnectionsOutputReference getSecureConnections();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference">MysqlMysqlDbSystemSecureConnectionsOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.source"></a>

```java
public MysqlMysqlDbSystemSourceOutputReference getSource();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference">MysqlMysqlDbSystemSourceOutputReference</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.timeouts"></a>

```java
public MysqlMysqlDbSystemTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference">MysqlMysqlDbSystemTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `adminPasswordInput`<sup>Optional</sup> <a name="adminPasswordInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.adminPasswordInput"></a>

```java
public java.lang.String getAdminPasswordInput();
```

- *Type:* java.lang.String

---

##### `adminUsernameInput`<sup>Optional</sup> <a name="adminUsernameInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.adminUsernameInput"></a>

```java
public java.lang.String getAdminUsernameInput();
```

- *Type:* java.lang.String

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.availabilityDomainInput"></a>

```java
public java.lang.String getAvailabilityDomainInput();
```

- *Type:* java.lang.String

---

##### `backupPolicyInput`<sup>Optional</sup> <a name="backupPolicyInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.backupPolicyInput"></a>

```java
public MysqlMysqlDbSystemBackupPolicy getBackupPolicyInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy">MysqlMysqlDbSystemBackupPolicy</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `configurationIdInput`<sup>Optional</sup> <a name="configurationIdInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.configurationIdInput"></a>

```java
public java.lang.String getConfigurationIdInput();
```

- *Type:* java.lang.String

---

##### `crashRecoveryInput`<sup>Optional</sup> <a name="crashRecoveryInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.crashRecoveryInput"></a>

```java
public java.lang.String getCrashRecoveryInput();
```

- *Type:* java.lang.String

---

##### `customerContactsInput`<sup>Optional</sup> <a name="customerContactsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.customerContactsInput"></a>

```java
public java.lang.Object getCustomerContactsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts">MysqlMysqlDbSystemCustomerContacts</a>>

---

##### `databaseManagementInput`<sup>Optional</sup> <a name="databaseManagementInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.databaseManagementInput"></a>

```java
public java.lang.String getDatabaseManagementInput();
```

- *Type:* java.lang.String

---

##### `dataStorageInput`<sup>Optional</sup> <a name="dataStorageInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.dataStorageInput"></a>

```java
public MysqlMysqlDbSystemDataStorage getDataStorageInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage">MysqlMysqlDbSystemDataStorage</a>

---

##### `dataStorageSizeInGbInput`<sup>Optional</sup> <a name="dataStorageSizeInGbInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.dataStorageSizeInGbInput"></a>

```java
public java.lang.Number getDataStorageSizeInGbInput();
```

- *Type:* java.lang.Number

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.deletionPolicyInput"></a>

```java
public java.lang.Object getDeletionPolicyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy">MysqlMysqlDbSystemDeletionPolicy</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `faultDomainInput`<sup>Optional</sup> <a name="faultDomainInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.faultDomainInput"></a>

```java
public java.lang.String getFaultDomainInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `hostnameLabelInput`<sup>Optional</sup> <a name="hostnameLabelInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.hostnameLabelInput"></a>

```java
public java.lang.String getHostnameLabelInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.ipAddressInput"></a>

```java
public java.lang.String getIpAddressInput();
```

- *Type:* java.lang.String

---

##### `isHighlyAvailableInput`<sup>Optional</sup> <a name="isHighlyAvailableInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.isHighlyAvailableInput"></a>

```java
public java.lang.Object getIsHighlyAvailableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maintenanceInput`<sup>Optional</sup> <a name="maintenanceInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.maintenanceInput"></a>

```java
public MysqlMysqlDbSystemMaintenance getMaintenanceInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance">MysqlMysqlDbSystemMaintenance</a>

---

##### `mysqlVersionInput`<sup>Optional</sup> <a name="mysqlVersionInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.mysqlVersionInput"></a>

```java
public java.lang.String getMysqlVersionInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `portXInput`<sup>Optional</sup> <a name="portXInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.portXInput"></a>

```java
public java.lang.Number getPortXInput();
```

- *Type:* java.lang.Number

---

##### `secureConnectionsInput`<sup>Optional</sup> <a name="secureConnectionsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.secureConnectionsInput"></a>

```java
public MysqlMysqlDbSystemSecureConnections getSecureConnectionsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections">MysqlMysqlDbSystemSecureConnections</a>

---

##### `shapeNameInput`<sup>Optional</sup> <a name="shapeNameInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.shapeNameInput"></a>

```java
public java.lang.String getShapeNameInput();
```

- *Type:* java.lang.String

---

##### `shutdownTypeInput`<sup>Optional</sup> <a name="shutdownTypeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.shutdownTypeInput"></a>

```java
public java.lang.String getShutdownTypeInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.sourceInput"></a>

```java
public MysqlMysqlDbSystemSource getSourceInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource">MysqlMysqlDbSystemSource</a>

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts">MysqlMysqlDbSystemTimeouts</a>

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.adminUsername"></a>

```java
public java.lang.String getAdminUsername();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `configurationId`<sup>Required</sup> <a name="configurationId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.configurationId"></a>

```java
public java.lang.String getConfigurationId();
```

- *Type:* java.lang.String

---

##### `crashRecovery`<sup>Required</sup> <a name="crashRecovery" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.crashRecovery"></a>

```java
public java.lang.String getCrashRecovery();
```

- *Type:* java.lang.String

---

##### `databaseManagement`<sup>Required</sup> <a name="databaseManagement" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.databaseManagement"></a>

```java
public java.lang.String getDatabaseManagement();
```

- *Type:* java.lang.String

---

##### `dataStorageSizeInGb`<sup>Required</sup> <a name="dataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.dataStorageSizeInGb"></a>

```java
public java.lang.Number getDataStorageSizeInGb();
```

- *Type:* java.lang.Number

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `faultDomain`<sup>Required</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.faultDomain"></a>

```java
public java.lang.String getFaultDomain();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `hostnameLabel`<sup>Required</sup> <a name="hostnameLabel" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.hostnameLabel"></a>

```java
public java.lang.String getHostnameLabel();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `isHighlyAvailable`<sup>Required</sup> <a name="isHighlyAvailable" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.isHighlyAvailable"></a>

```java
public java.lang.Object getIsHighlyAvailable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mysqlVersion`<sup>Required</sup> <a name="mysqlVersion" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.mysqlVersion"></a>

```java
public java.lang.String getMysqlVersion();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `portX`<sup>Required</sup> <a name="portX" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.portX"></a>

```java
public java.lang.Number getPortX();
```

- *Type:* java.lang.Number

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.shapeName"></a>

```java
public java.lang.String getShapeName();
```

- *Type:* java.lang.String

---

##### `shutdownType`<sup>Required</sup> <a name="shutdownType" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.shutdownType"></a>

```java
public java.lang.String getShutdownType();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MysqlMysqlDbSystemBackupPolicy <a name="MysqlMysqlDbSystemBackupPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemBackupPolicy;

MysqlMysqlDbSystemBackupPolicy.builder()
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .isEnabled(java.lang.Boolean)
//  .isEnabled(IResolvable)
//  .pitrPolicy(MysqlMysqlDbSystemBackupPolicyPitrPolicy)
//  .retentionInDays(java.lang.Number)
//  .windowStartTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#defined_tags MysqlMysqlDbSystem#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#freeform_tags MysqlMysqlDbSystem#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_enabled MysqlMysqlDbSystem#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.pitrPolicy">pitrPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy">MysqlMysqlDbSystemBackupPolicyPitrPolicy</a></code> | pitr_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.retentionInDays">retentionInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#retention_in_days MysqlMysqlDbSystem#retention_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.windowStartTime">windowStartTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#window_start_time MysqlMysqlDbSystem#window_start_time}. |

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#defined_tags MysqlMysqlDbSystem#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#freeform_tags MysqlMysqlDbSystem#freeform_tags}.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_enabled MysqlMysqlDbSystem#is_enabled}.

---

##### `pitrPolicy`<sup>Optional</sup> <a name="pitrPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.pitrPolicy"></a>

```java
public MysqlMysqlDbSystemBackupPolicyPitrPolicy getPitrPolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy">MysqlMysqlDbSystemBackupPolicyPitrPolicy</a>

pitr_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#pitr_policy MysqlMysqlDbSystem#pitr_policy}

---

##### `retentionInDays`<sup>Optional</sup> <a name="retentionInDays" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.retentionInDays"></a>

```java
public java.lang.Number getRetentionInDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#retention_in_days MysqlMysqlDbSystem#retention_in_days}.

---

##### `windowStartTime`<sup>Optional</sup> <a name="windowStartTime" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.windowStartTime"></a>

```java
public java.lang.String getWindowStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#window_start_time MysqlMysqlDbSystem#window_start_time}.

---

### MysqlMysqlDbSystemBackupPolicyPitrPolicy <a name="MysqlMysqlDbSystemBackupPolicyPitrPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemBackupPolicyPitrPolicy;

MysqlMysqlDbSystemBackupPolicyPitrPolicy.builder()
//  .isEnabled(java.lang.Boolean)
//  .isEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_enabled MysqlMysqlDbSystem#is_enabled}. |

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_enabled MysqlMysqlDbSystem#is_enabled}.

---

### MysqlMysqlDbSystemChannels <a name="MysqlMysqlDbSystemChannels" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannels"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannels.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemChannels;

MysqlMysqlDbSystemChannels.builder()
    .build();
```


### MysqlMysqlDbSystemChannelsSource <a name="MysqlMysqlDbSystemChannelsSource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemChannelsSource;

MysqlMysqlDbSystemChannelsSource.builder()
    .build();
```


### MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling <a name="MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling;

MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling.builder()
    .build();
```


### MysqlMysqlDbSystemChannelsSourceSslCaCertificate <a name="MysqlMysqlDbSystemChannelsSourceSslCaCertificate" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemChannelsSourceSslCaCertificate;

MysqlMysqlDbSystemChannelsSourceSslCaCertificate.builder()
    .build();
```


### MysqlMysqlDbSystemChannelsTarget <a name="MysqlMysqlDbSystemChannelsTarget" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTarget"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemChannelsTarget;

MysqlMysqlDbSystemChannelsTarget.builder()
    .build();
```


### MysqlMysqlDbSystemChannelsTargetFilters <a name="MysqlMysqlDbSystemChannelsTargetFilters" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFilters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemChannelsTargetFilters;

MysqlMysqlDbSystemChannelsTargetFilters.builder()
    .build();
```


### MysqlMysqlDbSystemConfig <a name="MysqlMysqlDbSystemConfig" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemConfig;

MysqlMysqlDbSystemConfig.builder()
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
    .compartmentId(java.lang.String)
    .shapeName(java.lang.String)
    .subnetId(java.lang.String)
//  .adminPassword(java.lang.String)
//  .adminUsername(java.lang.String)
//  .backupPolicy(MysqlMysqlDbSystemBackupPolicy)
//  .configurationId(java.lang.String)
//  .crashRecovery(java.lang.String)
//  .customerContacts(IResolvable)
//  .customerContacts(java.util.List<MysqlMysqlDbSystemCustomerContacts>)
//  .databaseManagement(java.lang.String)
//  .dataStorage(MysqlMysqlDbSystemDataStorage)
//  .dataStorageSizeInGb(java.lang.Number)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .deletionPolicy(IResolvable)
//  .deletionPolicy(java.util.List<MysqlMysqlDbSystemDeletionPolicy>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .faultDomain(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .hostnameLabel(java.lang.String)
//  .id(java.lang.String)
//  .ipAddress(java.lang.String)
//  .isHighlyAvailable(java.lang.Boolean)
//  .isHighlyAvailable(IResolvable)
//  .maintenance(MysqlMysqlDbSystemMaintenance)
//  .mysqlVersion(java.lang.String)
//  .port(java.lang.Number)
//  .portX(java.lang.Number)
//  .secureConnections(MysqlMysqlDbSystemSecureConnections)
//  .shutdownType(java.lang.String)
//  .source(MysqlMysqlDbSystemSource)
//  .state(java.lang.String)
//  .timeouts(MysqlMysqlDbSystemTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#availability_domain MysqlMysqlDbSystem#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#compartment_id MysqlMysqlDbSystem#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.shapeName">shapeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#shape_name MysqlMysqlDbSystem#shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#subnet_id MysqlMysqlDbSystem#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#admin_password MysqlMysqlDbSystem#admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.adminUsername">adminUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#admin_username MysqlMysqlDbSystem#admin_username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.backupPolicy">backupPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy">MysqlMysqlDbSystemBackupPolicy</a></code> | backup_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.configurationId">configurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#configuration_id MysqlMysqlDbSystem#configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.crashRecovery">crashRecovery</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#crash_recovery MysqlMysqlDbSystem#crash_recovery}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.customerContacts">customerContacts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts">MysqlMysqlDbSystemCustomerContacts</a>></code> | customer_contacts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.databaseManagement">databaseManagement</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#database_management MysqlMysqlDbSystem#database_management}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.dataStorage">dataStorage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage">MysqlMysqlDbSystemDataStorage</a></code> | data_storage block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.dataStorageSizeInGb">dataStorageSizeInGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#data_storage_size_in_gb MysqlMysqlDbSystem#data_storage_size_in_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#defined_tags MysqlMysqlDbSystem#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy">MysqlMysqlDbSystemDeletionPolicy</a>></code> | deletion_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#description MysqlMysqlDbSystem#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#display_name MysqlMysqlDbSystem#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.faultDomain">faultDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#fault_domain MysqlMysqlDbSystem#fault_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#freeform_tags MysqlMysqlDbSystem#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.hostnameLabel">hostnameLabel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#hostname_label MysqlMysqlDbSystem#hostname_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#id MysqlMysqlDbSystem#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#ip_address MysqlMysqlDbSystem#ip_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.isHighlyAvailable">isHighlyAvailable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_highly_available MysqlMysqlDbSystem#is_highly_available}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.maintenance">maintenance</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance">MysqlMysqlDbSystemMaintenance</a></code> | maintenance block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.mysqlVersion">mysqlVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#mysql_version MysqlMysqlDbSystem#mysql_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#port MysqlMysqlDbSystem#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.portX">portX</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#port_x MysqlMysqlDbSystem#port_x}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.secureConnections">secureConnections</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections">MysqlMysqlDbSystemSecureConnections</a></code> | secure_connections block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.shutdownType">shutdownType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#shutdown_type MysqlMysqlDbSystem#shutdown_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource">MysqlMysqlDbSystemSource</a></code> | source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#state MysqlMysqlDbSystem#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts">MysqlMysqlDbSystemTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#availability_domain MysqlMysqlDbSystem#availability_domain}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#compartment_id MysqlMysqlDbSystem#compartment_id}.

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.shapeName"></a>

```java
public java.lang.String getShapeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#shape_name MysqlMysqlDbSystem#shape_name}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#subnet_id MysqlMysqlDbSystem#subnet_id}.

---

##### `adminPassword`<sup>Optional</sup> <a name="adminPassword" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#admin_password MysqlMysqlDbSystem#admin_password}.

---

##### `adminUsername`<sup>Optional</sup> <a name="adminUsername" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.adminUsername"></a>

```java
public java.lang.String getAdminUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#admin_username MysqlMysqlDbSystem#admin_username}.

---

##### `backupPolicy`<sup>Optional</sup> <a name="backupPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.backupPolicy"></a>

```java
public MysqlMysqlDbSystemBackupPolicy getBackupPolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy">MysqlMysqlDbSystemBackupPolicy</a>

backup_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#backup_policy MysqlMysqlDbSystem#backup_policy}

---

##### `configurationId`<sup>Optional</sup> <a name="configurationId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.configurationId"></a>

```java
public java.lang.String getConfigurationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#configuration_id MysqlMysqlDbSystem#configuration_id}.

---

##### `crashRecovery`<sup>Optional</sup> <a name="crashRecovery" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.crashRecovery"></a>

```java
public java.lang.String getCrashRecovery();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#crash_recovery MysqlMysqlDbSystem#crash_recovery}.

---

##### `customerContacts`<sup>Optional</sup> <a name="customerContacts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.customerContacts"></a>

```java
public java.lang.Object getCustomerContacts();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts">MysqlMysqlDbSystemCustomerContacts</a>>

customer_contacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#customer_contacts MysqlMysqlDbSystem#customer_contacts}

---

##### `databaseManagement`<sup>Optional</sup> <a name="databaseManagement" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.databaseManagement"></a>

```java
public java.lang.String getDatabaseManagement();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#database_management MysqlMysqlDbSystem#database_management}.

---

##### `dataStorage`<sup>Optional</sup> <a name="dataStorage" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.dataStorage"></a>

```java
public MysqlMysqlDbSystemDataStorage getDataStorage();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage">MysqlMysqlDbSystemDataStorage</a>

data_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#data_storage MysqlMysqlDbSystem#data_storage}

---

##### `dataStorageSizeInGb`<sup>Optional</sup> <a name="dataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.dataStorageSizeInGb"></a>

```java
public java.lang.Number getDataStorageSizeInGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#data_storage_size_in_gb MysqlMysqlDbSystem#data_storage_size_in_gb}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#defined_tags MysqlMysqlDbSystem#defined_tags}.

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.deletionPolicy"></a>

```java
public java.lang.Object getDeletionPolicy();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy">MysqlMysqlDbSystemDeletionPolicy</a>>

deletion_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#deletion_policy MysqlMysqlDbSystem#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#description MysqlMysqlDbSystem#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#display_name MysqlMysqlDbSystem#display_name}.

---

##### `faultDomain`<sup>Optional</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.faultDomain"></a>

```java
public java.lang.String getFaultDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#fault_domain MysqlMysqlDbSystem#fault_domain}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#freeform_tags MysqlMysqlDbSystem#freeform_tags}.

---

##### `hostnameLabel`<sup>Optional</sup> <a name="hostnameLabel" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.hostnameLabel"></a>

```java
public java.lang.String getHostnameLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#hostname_label MysqlMysqlDbSystem#hostname_label}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#id MysqlMysqlDbSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#ip_address MysqlMysqlDbSystem#ip_address}.

---

##### `isHighlyAvailable`<sup>Optional</sup> <a name="isHighlyAvailable" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.isHighlyAvailable"></a>

```java
public java.lang.Object getIsHighlyAvailable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_highly_available MysqlMysqlDbSystem#is_highly_available}.

---

##### `maintenance`<sup>Optional</sup> <a name="maintenance" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.maintenance"></a>

```java
public MysqlMysqlDbSystemMaintenance getMaintenance();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance">MysqlMysqlDbSystemMaintenance</a>

maintenance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#maintenance MysqlMysqlDbSystem#maintenance}

---

##### `mysqlVersion`<sup>Optional</sup> <a name="mysqlVersion" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.mysqlVersion"></a>

```java
public java.lang.String getMysqlVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#mysql_version MysqlMysqlDbSystem#mysql_version}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#port MysqlMysqlDbSystem#port}.

---

##### `portX`<sup>Optional</sup> <a name="portX" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.portX"></a>

```java
public java.lang.Number getPortX();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#port_x MysqlMysqlDbSystem#port_x}.

---

##### `secureConnections`<sup>Optional</sup> <a name="secureConnections" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.secureConnections"></a>

```java
public MysqlMysqlDbSystemSecureConnections getSecureConnections();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections">MysqlMysqlDbSystemSecureConnections</a>

secure_connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#secure_connections MysqlMysqlDbSystem#secure_connections}

---

##### `shutdownType`<sup>Optional</sup> <a name="shutdownType" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.shutdownType"></a>

```java
public java.lang.String getShutdownType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#shutdown_type MysqlMysqlDbSystem#shutdown_type}.

---

##### `source`<sup>Optional</sup> <a name="source" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.source"></a>

```java
public MysqlMysqlDbSystemSource getSource();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource">MysqlMysqlDbSystemSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#source MysqlMysqlDbSystem#source}

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#state MysqlMysqlDbSystem#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.timeouts"></a>

```java
public MysqlMysqlDbSystemTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts">MysqlMysqlDbSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#timeouts MysqlMysqlDbSystem#timeouts}

---

### MysqlMysqlDbSystemCurrentPlacement <a name="MysqlMysqlDbSystemCurrentPlacement" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacement"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemCurrentPlacement;

MysqlMysqlDbSystemCurrentPlacement.builder()
    .build();
```


### MysqlMysqlDbSystemCustomerContacts <a name="MysqlMysqlDbSystemCustomerContacts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemCustomerContacts;

MysqlMysqlDbSystemCustomerContacts.builder()
    .email(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts.property.email">email</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#email MysqlMysqlDbSystem#email}. |

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#email MysqlMysqlDbSystem#email}.

---

### MysqlMysqlDbSystemDataStorage <a name="MysqlMysqlDbSystemDataStorage" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemDataStorage;

MysqlMysqlDbSystemDataStorage.builder()
//  .isAutoExpandStorageEnabled(java.lang.Boolean)
//  .isAutoExpandStorageEnabled(IResolvable)
//  .maxStorageSizeInGbs(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage.property.isAutoExpandStorageEnabled">isAutoExpandStorageEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_auto_expand_storage_enabled MysqlMysqlDbSystem#is_auto_expand_storage_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage.property.maxStorageSizeInGbs">maxStorageSizeInGbs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#max_storage_size_in_gbs MysqlMysqlDbSystem#max_storage_size_in_gbs}. |

---

##### `isAutoExpandStorageEnabled`<sup>Optional</sup> <a name="isAutoExpandStorageEnabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage.property.isAutoExpandStorageEnabled"></a>

```java
public java.lang.Object getIsAutoExpandStorageEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_auto_expand_storage_enabled MysqlMysqlDbSystem#is_auto_expand_storage_enabled}.

---

##### `maxStorageSizeInGbs`<sup>Optional</sup> <a name="maxStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage.property.maxStorageSizeInGbs"></a>

```java
public java.lang.Number getMaxStorageSizeInGbs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#max_storage_size_in_gbs MysqlMysqlDbSystem#max_storage_size_in_gbs}.

---

### MysqlMysqlDbSystemDeletionPolicy <a name="MysqlMysqlDbSystemDeletionPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemDeletionPolicy;

MysqlMysqlDbSystemDeletionPolicy.builder()
//  .automaticBackupRetention(java.lang.String)
//  .finalBackup(java.lang.String)
//  .isDeleteProtected(java.lang.Boolean)
//  .isDeleteProtected(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy.property.automaticBackupRetention">automaticBackupRetention</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#automatic_backup_retention MysqlMysqlDbSystem#automatic_backup_retention}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy.property.finalBackup">finalBackup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#final_backup MysqlMysqlDbSystem#final_backup}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy.property.isDeleteProtected">isDeleteProtected</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_delete_protected MysqlMysqlDbSystem#is_delete_protected}. |

---

##### `automaticBackupRetention`<sup>Optional</sup> <a name="automaticBackupRetention" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy.property.automaticBackupRetention"></a>

```java
public java.lang.String getAutomaticBackupRetention();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#automatic_backup_retention MysqlMysqlDbSystem#automatic_backup_retention}.

---

##### `finalBackup`<sup>Optional</sup> <a name="finalBackup" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy.property.finalBackup"></a>

```java
public java.lang.String getFinalBackup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#final_backup MysqlMysqlDbSystem#final_backup}.

---

##### `isDeleteProtected`<sup>Optional</sup> <a name="isDeleteProtected" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy.property.isDeleteProtected"></a>

```java
public java.lang.Object getIsDeleteProtected();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_delete_protected MysqlMysqlDbSystem#is_delete_protected}.

---

### MysqlMysqlDbSystemEndpoints <a name="MysqlMysqlDbSystemEndpoints" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpoints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemEndpoints;

MysqlMysqlDbSystemEndpoints.builder()
    .build();
```


### MysqlMysqlDbSystemHeatWaveCluster <a name="MysqlMysqlDbSystemHeatWaveCluster" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveCluster"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemHeatWaveCluster;

MysqlMysqlDbSystemHeatWaveCluster.builder()
    .build();
```


### MysqlMysqlDbSystemMaintenance <a name="MysqlMysqlDbSystemMaintenance" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemMaintenance;

MysqlMysqlDbSystemMaintenance.builder()
    .windowStartTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance.property.windowStartTime">windowStartTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#window_start_time MysqlMysqlDbSystem#window_start_time}. |

---

##### `windowStartTime`<sup>Required</sup> <a name="windowStartTime" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance.property.windowStartTime"></a>

```java
public java.lang.String getWindowStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#window_start_time MysqlMysqlDbSystem#window_start_time}.

---

### MysqlMysqlDbSystemPointInTimeRecoveryDetails <a name="MysqlMysqlDbSystemPointInTimeRecoveryDetails" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemPointInTimeRecoveryDetails;

MysqlMysqlDbSystemPointInTimeRecoveryDetails.builder()
    .build();
```


### MysqlMysqlDbSystemSecureConnections <a name="MysqlMysqlDbSystemSecureConnections" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemSecureConnections;

MysqlMysqlDbSystemSecureConnections.builder()
    .certificateGenerationType(java.lang.String)
//  .certificateId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections.property.certificateGenerationType">certificateGenerationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#certificate_generation_type MysqlMysqlDbSystem#certificate_generation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#certificate_id MysqlMysqlDbSystem#certificate_id}. |

---

##### `certificateGenerationType`<sup>Required</sup> <a name="certificateGenerationType" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections.property.certificateGenerationType"></a>

```java
public java.lang.String getCertificateGenerationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#certificate_generation_type MysqlMysqlDbSystem#certificate_generation_type}.

---

##### `certificateId`<sup>Optional</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#certificate_id MysqlMysqlDbSystem#certificate_id}.

---

### MysqlMysqlDbSystemSource <a name="MysqlMysqlDbSystemSource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemSource;

MysqlMysqlDbSystemSource.builder()
    .sourceType(java.lang.String)
//  .backupId(java.lang.String)
//  .dbSystemId(java.lang.String)
//  .recoveryPoint(java.lang.String)
//  .sourceUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#source_type MysqlMysqlDbSystem#source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.property.backupId">backupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#backup_id MysqlMysqlDbSystem#backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.property.dbSystemId">dbSystemId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#db_system_id MysqlMysqlDbSystem#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.property.recoveryPoint">recoveryPoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#recovery_point MysqlMysqlDbSystem#recovery_point}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.property.sourceUrl">sourceUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#source_url MysqlMysqlDbSystem#source_url}. |

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#source_type MysqlMysqlDbSystem#source_type}.

---

##### `backupId`<sup>Optional</sup> <a name="backupId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.property.backupId"></a>

```java
public java.lang.String getBackupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#backup_id MysqlMysqlDbSystem#backup_id}.

---

##### `dbSystemId`<sup>Optional</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.property.dbSystemId"></a>

```java
public java.lang.String getDbSystemId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#db_system_id MysqlMysqlDbSystem#db_system_id}.

---

##### `recoveryPoint`<sup>Optional</sup> <a name="recoveryPoint" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.property.recoveryPoint"></a>

```java
public java.lang.String getRecoveryPoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#recovery_point MysqlMysqlDbSystem#recovery_point}.

---

##### `sourceUrl`<sup>Optional</sup> <a name="sourceUrl" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.property.sourceUrl"></a>

```java
public java.lang.String getSourceUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#source_url MysqlMysqlDbSystem#source_url}.

---

### MysqlMysqlDbSystemTimeouts <a name="MysqlMysqlDbSystemTimeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemTimeouts;

MysqlMysqlDbSystemTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#create MysqlMysqlDbSystem#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#delete MysqlMysqlDbSystem#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#update MysqlMysqlDbSystem#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#create MysqlMysqlDbSystem#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#delete MysqlMysqlDbSystem#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#update MysqlMysqlDbSystem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MysqlMysqlDbSystemBackupPolicyOutputReference <a name="MysqlMysqlDbSystemBackupPolicyOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemBackupPolicyOutputReference;

new MysqlMysqlDbSystemBackupPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.putPitrPolicy">putPitrPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetPitrPolicy">resetPitrPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetRetentionInDays">resetRetentionInDays</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetWindowStartTime">resetWindowStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPitrPolicy` <a name="putPitrPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.putPitrPolicy"></a>

```java
public void putPitrPolicy(MysqlMysqlDbSystemBackupPolicyPitrPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.putPitrPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy">MysqlMysqlDbSystemBackupPolicyPitrPolicy</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetIsEnabled"></a>

```java
public void resetIsEnabled()
```

##### `resetPitrPolicy` <a name="resetPitrPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetPitrPolicy"></a>

```java
public void resetPitrPolicy()
```

##### `resetRetentionInDays` <a name="resetRetentionInDays" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetRetentionInDays"></a>

```java
public void resetRetentionInDays()
```

##### `resetWindowStartTime` <a name="resetWindowStartTime" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetWindowStartTime"></a>

```java
public void resetWindowStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.pitrPolicy">pitrPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference">MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.pitrPolicyInput">pitrPolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy">MysqlMysqlDbSystemBackupPolicyPitrPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.retentionInDaysInput">retentionInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.windowStartTimeInput">windowStartTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.retentionInDays">retentionInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.windowStartTime">windowStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy">MysqlMysqlDbSystemBackupPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pitrPolicy`<sup>Required</sup> <a name="pitrPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.pitrPolicy"></a>

```java
public MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference getPitrPolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference">MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference</a>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Object getIsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pitrPolicyInput`<sup>Optional</sup> <a name="pitrPolicyInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.pitrPolicyInput"></a>

```java
public MysqlMysqlDbSystemBackupPolicyPitrPolicy getPitrPolicyInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy">MysqlMysqlDbSystemBackupPolicyPitrPolicy</a>

---

##### `retentionInDaysInput`<sup>Optional</sup> <a name="retentionInDaysInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.retentionInDaysInput"></a>

```java
public java.lang.Number getRetentionInDaysInput();
```

- *Type:* java.lang.Number

---

##### `windowStartTimeInput`<sup>Optional</sup> <a name="windowStartTimeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.windowStartTimeInput"></a>

```java
public java.lang.String getWindowStartTimeInput();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.retentionInDays"></a>

```java
public java.lang.Number getRetentionInDays();
```

- *Type:* java.lang.Number

---

##### `windowStartTime`<sup>Required</sup> <a name="windowStartTime" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.windowStartTime"></a>

```java
public java.lang.String getWindowStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.internalValue"></a>

```java
public MysqlMysqlDbSystemBackupPolicy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy">MysqlMysqlDbSystemBackupPolicy</a>

---


### MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference <a name="MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference;

new MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsEnabled` <a name="resetIsEnabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.resetIsEnabled"></a>

```java
public void resetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy">MysqlMysqlDbSystemBackupPolicyPitrPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Object getIsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.internalValue"></a>

```java
public MysqlMysqlDbSystemBackupPolicyPitrPolicy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy">MysqlMysqlDbSystemBackupPolicyPitrPolicy</a>

---


### MysqlMysqlDbSystemChannelsList <a name="MysqlMysqlDbSystemChannelsList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemChannelsList;

new MysqlMysqlDbSystemChannelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.get"></a>

```java
public MysqlMysqlDbSystemChannelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MysqlMysqlDbSystemChannelsOutputReference <a name="MysqlMysqlDbSystemChannelsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemChannelsOutputReference;

new MysqlMysqlDbSystemChannelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.isEnabled">isEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList">MysqlMysqlDbSystemChannelsSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.target">target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList">MysqlMysqlDbSystemChannelsTargetList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannels">MysqlMysqlDbSystemChannels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.source"></a>

```java
public MysqlMysqlDbSystemChannelsSourceList getSource();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList">MysqlMysqlDbSystemChannelsSourceList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.target"></a>

```java
public MysqlMysqlDbSystemChannelsTargetList getTarget();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList">MysqlMysqlDbSystemChannelsTargetList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.internalValue"></a>

```java
public MysqlMysqlDbSystemChannels getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannels">MysqlMysqlDbSystemChannels</a>

---


### MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList <a name="MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList;

new MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.get"></a>

```java
public MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference <a name="MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference;

new MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogFilename">lastConfiguredLogFilename</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogOffset">lastConfiguredLogOffset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.policy">policy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling">MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lastConfiguredLogFilename`<sup>Required</sup> <a name="lastConfiguredLogFilename" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogFilename"></a>

```java
public java.lang.String getLastConfiguredLogFilename();
```

- *Type:* java.lang.String

---

##### `lastConfiguredLogOffset`<sup>Required</sup> <a name="lastConfiguredLogOffset" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogOffset"></a>

```java
public java.lang.String getLastConfiguredLogOffset();
```

- *Type:* java.lang.String

---

##### `policy`<sup>Required</sup> <a name="policy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.internalValue"></a>

```java
public MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling">MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling</a>

---


### MysqlMysqlDbSystemChannelsSourceList <a name="MysqlMysqlDbSystemChannelsSourceList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemChannelsSourceList;

new MysqlMysqlDbSystemChannelsSourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.get"></a>

```java
public MysqlMysqlDbSystemChannelsSourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MysqlMysqlDbSystemChannelsSourceOutputReference <a name="MysqlMysqlDbSystemChannelsSourceOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemChannelsSourceOutputReference;

new MysqlMysqlDbSystemChannelsSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.anonymousTransactionsHandling">anonymousTransactionsHandling</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList">MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.sslCaCertificate">sslCaCertificate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList">MysqlMysqlDbSystemChannelsSourceSslCaCertificateList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSource">MysqlMysqlDbSystemChannelsSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `anonymousTransactionsHandling`<sup>Required</sup> <a name="anonymousTransactionsHandling" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.anonymousTransactionsHandling"></a>

```java
public MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList getAnonymousTransactionsHandling();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList">MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList</a>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

---

##### `sslCaCertificate`<sup>Required</sup> <a name="sslCaCertificate" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.sslCaCertificate"></a>

```java
public MysqlMysqlDbSystemChannelsSourceSslCaCertificateList getSslCaCertificate();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList">MysqlMysqlDbSystemChannelsSourceSslCaCertificateList</a>

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.internalValue"></a>

```java
public MysqlMysqlDbSystemChannelsSource getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSource">MysqlMysqlDbSystemChannelsSource</a>

---


### MysqlMysqlDbSystemChannelsSourceSslCaCertificateList <a name="MysqlMysqlDbSystemChannelsSourceSslCaCertificateList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList;

new MysqlMysqlDbSystemChannelsSourceSslCaCertificateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.get"></a>

```java
public MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference <a name="MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference;

new MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.certificateType">certificateType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.contents">contents</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificate">MysqlMysqlDbSystemChannelsSourceSslCaCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateType`<sup>Required</sup> <a name="certificateType" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.certificateType"></a>

```java
public java.lang.String getCertificateType();
```

- *Type:* java.lang.String

---

##### `contents`<sup>Required</sup> <a name="contents" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.contents"></a>

```java
public java.lang.String getContents();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.internalValue"></a>

```java
public MysqlMysqlDbSystemChannelsSourceSslCaCertificate getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificate">MysqlMysqlDbSystemChannelsSourceSslCaCertificate</a>

---


### MysqlMysqlDbSystemChannelsTargetFiltersList <a name="MysqlMysqlDbSystemChannelsTargetFiltersList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemChannelsTargetFiltersList;

new MysqlMysqlDbSystemChannelsTargetFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.get"></a>

```java
public MysqlMysqlDbSystemChannelsTargetFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MysqlMysqlDbSystemChannelsTargetFiltersOutputReference <a name="MysqlMysqlDbSystemChannelsTargetFiltersOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference;

new MysqlMysqlDbSystemChannelsTargetFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFilters">MysqlMysqlDbSystemChannelsTargetFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.internalValue"></a>

```java
public MysqlMysqlDbSystemChannelsTargetFilters getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFilters">MysqlMysqlDbSystemChannelsTargetFilters</a>

---


### MysqlMysqlDbSystemChannelsTargetList <a name="MysqlMysqlDbSystemChannelsTargetList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemChannelsTargetList;

new MysqlMysqlDbSystemChannelsTargetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.get"></a>

```java
public MysqlMysqlDbSystemChannelsTargetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MysqlMysqlDbSystemChannelsTargetOutputReference <a name="MysqlMysqlDbSystemChannelsTargetOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemChannelsTargetOutputReference;

new MysqlMysqlDbSystemChannelsTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.applierUsername">applierUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.channelName">channelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.dbSystemId">dbSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.delayInSeconds">delayInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.filters">filters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList">MysqlMysqlDbSystemChannelsTargetFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.tablesWithoutPrimaryKeyHandling">tablesWithoutPrimaryKeyHandling</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.targetType">targetType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTarget">MysqlMysqlDbSystemChannelsTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applierUsername`<sup>Required</sup> <a name="applierUsername" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.applierUsername"></a>

```java
public java.lang.String getApplierUsername();
```

- *Type:* java.lang.String

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.channelName"></a>

```java
public java.lang.String getChannelName();
```

- *Type:* java.lang.String

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.dbSystemId"></a>

```java
public java.lang.String getDbSystemId();
```

- *Type:* java.lang.String

---

##### `delayInSeconds`<sup>Required</sup> <a name="delayInSeconds" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.delayInSeconds"></a>

```java
public java.lang.Number getDelayInSeconds();
```

- *Type:* java.lang.Number

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.filters"></a>

```java
public MysqlMysqlDbSystemChannelsTargetFiltersList getFilters();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList">MysqlMysqlDbSystemChannelsTargetFiltersList</a>

---

##### `tablesWithoutPrimaryKeyHandling`<sup>Required</sup> <a name="tablesWithoutPrimaryKeyHandling" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.tablesWithoutPrimaryKeyHandling"></a>

```java
public java.lang.String getTablesWithoutPrimaryKeyHandling();
```

- *Type:* java.lang.String

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.targetType"></a>

```java
public java.lang.String getTargetType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.internalValue"></a>

```java
public MysqlMysqlDbSystemChannelsTarget getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTarget">MysqlMysqlDbSystemChannelsTarget</a>

---


### MysqlMysqlDbSystemCurrentPlacementList <a name="MysqlMysqlDbSystemCurrentPlacementList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemCurrentPlacementList;

new MysqlMysqlDbSystemCurrentPlacementList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.get"></a>

```java
public MysqlMysqlDbSystemCurrentPlacementOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MysqlMysqlDbSystemCurrentPlacementOutputReference <a name="MysqlMysqlDbSystemCurrentPlacementOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemCurrentPlacementOutputReference;

new MysqlMysqlDbSystemCurrentPlacementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.property.faultDomain">faultDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacement">MysqlMysqlDbSystemCurrentPlacement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `faultDomain`<sup>Required</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.property.faultDomain"></a>

```java
public java.lang.String getFaultDomain();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.property.internalValue"></a>

```java
public MysqlMysqlDbSystemCurrentPlacement getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacement">MysqlMysqlDbSystemCurrentPlacement</a>

---


### MysqlMysqlDbSystemCustomerContactsList <a name="MysqlMysqlDbSystemCustomerContactsList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemCustomerContactsList;

new MysqlMysqlDbSystemCustomerContactsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.get"></a>

```java
public MysqlMysqlDbSystemCustomerContactsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts">MysqlMysqlDbSystemCustomerContacts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts">MysqlMysqlDbSystemCustomerContacts</a>>

---


### MysqlMysqlDbSystemCustomerContactsOutputReference <a name="MysqlMysqlDbSystemCustomerContactsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemCustomerContactsOutputReference;

new MysqlMysqlDbSystemCustomerContactsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts">MysqlMysqlDbSystemCustomerContacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts">MysqlMysqlDbSystemCustomerContacts</a>

---


### MysqlMysqlDbSystemDataStorageOutputReference <a name="MysqlMysqlDbSystemDataStorageOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemDataStorageOutputReference;

new MysqlMysqlDbSystemDataStorageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.resetIsAutoExpandStorageEnabled">resetIsAutoExpandStorageEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.resetMaxStorageSizeInGbs">resetMaxStorageSizeInGbs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsAutoExpandStorageEnabled` <a name="resetIsAutoExpandStorageEnabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.resetIsAutoExpandStorageEnabled"></a>

```java
public void resetIsAutoExpandStorageEnabled()
```

##### `resetMaxStorageSizeInGbs` <a name="resetMaxStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.resetMaxStorageSizeInGbs"></a>

```java
public void resetMaxStorageSizeInGbs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.allocatedStorageSizeInGbs">allocatedStorageSizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.dataStorageSizeInGb">dataStorageSizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.dataStorageSizeLimitInGbs">dataStorageSizeLimitInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.isAutoExpandStorageEnabledInput">isAutoExpandStorageEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.maxStorageSizeInGbsInput">maxStorageSizeInGbsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.isAutoExpandStorageEnabled">isAutoExpandStorageEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.maxStorageSizeInGbs">maxStorageSizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage">MysqlMysqlDbSystemDataStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allocatedStorageSizeInGbs`<sup>Required</sup> <a name="allocatedStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.allocatedStorageSizeInGbs"></a>

```java
public java.lang.Number getAllocatedStorageSizeInGbs();
```

- *Type:* java.lang.Number

---

##### `dataStorageSizeInGb`<sup>Required</sup> <a name="dataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.dataStorageSizeInGb"></a>

```java
public java.lang.Number getDataStorageSizeInGb();
```

- *Type:* java.lang.Number

---

##### `dataStorageSizeLimitInGbs`<sup>Required</sup> <a name="dataStorageSizeLimitInGbs" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.dataStorageSizeLimitInGbs"></a>

```java
public java.lang.Number getDataStorageSizeLimitInGbs();
```

- *Type:* java.lang.Number

---

##### `isAutoExpandStorageEnabledInput`<sup>Optional</sup> <a name="isAutoExpandStorageEnabledInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.isAutoExpandStorageEnabledInput"></a>

```java
public java.lang.Object getIsAutoExpandStorageEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxStorageSizeInGbsInput`<sup>Optional</sup> <a name="maxStorageSizeInGbsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.maxStorageSizeInGbsInput"></a>

```java
public java.lang.Number getMaxStorageSizeInGbsInput();
```

- *Type:* java.lang.Number

---

##### `isAutoExpandStorageEnabled`<sup>Required</sup> <a name="isAutoExpandStorageEnabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.isAutoExpandStorageEnabled"></a>

```java
public java.lang.Object getIsAutoExpandStorageEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxStorageSizeInGbs`<sup>Required</sup> <a name="maxStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.maxStorageSizeInGbs"></a>

```java
public java.lang.Number getMaxStorageSizeInGbs();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.internalValue"></a>

```java
public MysqlMysqlDbSystemDataStorage getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage">MysqlMysqlDbSystemDataStorage</a>

---


### MysqlMysqlDbSystemDeletionPolicyList <a name="MysqlMysqlDbSystemDeletionPolicyList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemDeletionPolicyList;

new MysqlMysqlDbSystemDeletionPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.get"></a>

```java
public MysqlMysqlDbSystemDeletionPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy">MysqlMysqlDbSystemDeletionPolicy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy">MysqlMysqlDbSystemDeletionPolicy</a>>

---


### MysqlMysqlDbSystemDeletionPolicyOutputReference <a name="MysqlMysqlDbSystemDeletionPolicyOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemDeletionPolicyOutputReference;

new MysqlMysqlDbSystemDeletionPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.resetAutomaticBackupRetention">resetAutomaticBackupRetention</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.resetFinalBackup">resetFinalBackup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.resetIsDeleteProtected">resetIsDeleteProtected</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutomaticBackupRetention` <a name="resetAutomaticBackupRetention" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.resetAutomaticBackupRetention"></a>

```java
public void resetAutomaticBackupRetention()
```

##### `resetFinalBackup` <a name="resetFinalBackup" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.resetFinalBackup"></a>

```java
public void resetFinalBackup()
```

##### `resetIsDeleteProtected` <a name="resetIsDeleteProtected" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.resetIsDeleteProtected"></a>

```java
public void resetIsDeleteProtected()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.automaticBackupRetentionInput">automaticBackupRetentionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.finalBackupInput">finalBackupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.isDeleteProtectedInput">isDeleteProtectedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.automaticBackupRetention">automaticBackupRetention</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.finalBackup">finalBackup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.isDeleteProtected">isDeleteProtected</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy">MysqlMysqlDbSystemDeletionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `automaticBackupRetentionInput`<sup>Optional</sup> <a name="automaticBackupRetentionInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.automaticBackupRetentionInput"></a>

```java
public java.lang.String getAutomaticBackupRetentionInput();
```

- *Type:* java.lang.String

---

##### `finalBackupInput`<sup>Optional</sup> <a name="finalBackupInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.finalBackupInput"></a>

```java
public java.lang.String getFinalBackupInput();
```

- *Type:* java.lang.String

---

##### `isDeleteProtectedInput`<sup>Optional</sup> <a name="isDeleteProtectedInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.isDeleteProtectedInput"></a>

```java
public java.lang.Object getIsDeleteProtectedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `automaticBackupRetention`<sup>Required</sup> <a name="automaticBackupRetention" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.automaticBackupRetention"></a>

```java
public java.lang.String getAutomaticBackupRetention();
```

- *Type:* java.lang.String

---

##### `finalBackup`<sup>Required</sup> <a name="finalBackup" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.finalBackup"></a>

```java
public java.lang.String getFinalBackup();
```

- *Type:* java.lang.String

---

##### `isDeleteProtected`<sup>Required</sup> <a name="isDeleteProtected" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.isDeleteProtected"></a>

```java
public java.lang.Object getIsDeleteProtected();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy">MysqlMysqlDbSystemDeletionPolicy</a>

---


### MysqlMysqlDbSystemEndpointsList <a name="MysqlMysqlDbSystemEndpointsList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemEndpointsList;

new MysqlMysqlDbSystemEndpointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.get"></a>

```java
public MysqlMysqlDbSystemEndpointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MysqlMysqlDbSystemEndpointsOutputReference <a name="MysqlMysqlDbSystemEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemEndpointsOutputReference;

new MysqlMysqlDbSystemEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.modes">modes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.portX">portX</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.statusDetails">statusDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpoints">MysqlMysqlDbSystemEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `modes`<sup>Required</sup> <a name="modes" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.modes"></a>

```java
public java.util.List<java.lang.String> getModes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `portX`<sup>Required</sup> <a name="portX" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.portX"></a>

```java
public java.lang.Number getPortX();
```

- *Type:* java.lang.Number

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusDetails`<sup>Required</sup> <a name="statusDetails" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.statusDetails"></a>

```java
public java.lang.String getStatusDetails();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.internalValue"></a>

```java
public MysqlMysqlDbSystemEndpoints getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpoints">MysqlMysqlDbSystemEndpoints</a>

---


### MysqlMysqlDbSystemHeatWaveClusterList <a name="MysqlMysqlDbSystemHeatWaveClusterList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemHeatWaveClusterList;

new MysqlMysqlDbSystemHeatWaveClusterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.get"></a>

```java
public MysqlMysqlDbSystemHeatWaveClusterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MysqlMysqlDbSystemHeatWaveClusterOutputReference <a name="MysqlMysqlDbSystemHeatWaveClusterOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemHeatWaveClusterOutputReference;

new MysqlMysqlDbSystemHeatWaveClusterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.clusterSize">clusterSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.isLakehouseEnabled">isLakehouseEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.shapeName">shapeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveCluster">MysqlMysqlDbSystemHeatWaveCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clusterSize`<sup>Required</sup> <a name="clusterSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.clusterSize"></a>

```java
public java.lang.Number getClusterSize();
```

- *Type:* java.lang.Number

---

##### `isLakehouseEnabled`<sup>Required</sup> <a name="isLakehouseEnabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.isLakehouseEnabled"></a>

```java
public IResolvable getIsLakehouseEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.shapeName"></a>

```java
public java.lang.String getShapeName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.internalValue"></a>

```java
public MysqlMysqlDbSystemHeatWaveCluster getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveCluster">MysqlMysqlDbSystemHeatWaveCluster</a>

---


### MysqlMysqlDbSystemMaintenanceOutputReference <a name="MysqlMysqlDbSystemMaintenanceOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemMaintenanceOutputReference;

new MysqlMysqlDbSystemMaintenanceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.property.windowStartTimeInput">windowStartTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.property.windowStartTime">windowStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance">MysqlMysqlDbSystemMaintenance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `windowStartTimeInput`<sup>Optional</sup> <a name="windowStartTimeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.property.windowStartTimeInput"></a>

```java
public java.lang.String getWindowStartTimeInput();
```

- *Type:* java.lang.String

---

##### `windowStartTime`<sup>Required</sup> <a name="windowStartTime" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.property.windowStartTime"></a>

```java
public java.lang.String getWindowStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.property.internalValue"></a>

```java
public MysqlMysqlDbSystemMaintenance getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance">MysqlMysqlDbSystemMaintenance</a>

---


### MysqlMysqlDbSystemPointInTimeRecoveryDetailsList <a name="MysqlMysqlDbSystemPointInTimeRecoveryDetailsList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList;

new MysqlMysqlDbSystemPointInTimeRecoveryDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.get"></a>

```java
public MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference <a name="MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference;

new MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.timeEarliestRecoveryPoint">timeEarliestRecoveryPoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.timeLatestRecoveryPoint">timeLatestRecoveryPoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetails">MysqlMysqlDbSystemPointInTimeRecoveryDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeEarliestRecoveryPoint`<sup>Required</sup> <a name="timeEarliestRecoveryPoint" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.timeEarliestRecoveryPoint"></a>

```java
public java.lang.String getTimeEarliestRecoveryPoint();
```

- *Type:* java.lang.String

---

##### `timeLatestRecoveryPoint`<sup>Required</sup> <a name="timeLatestRecoveryPoint" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.timeLatestRecoveryPoint"></a>

```java
public java.lang.String getTimeLatestRecoveryPoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.internalValue"></a>

```java
public MysqlMysqlDbSystemPointInTimeRecoveryDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetails">MysqlMysqlDbSystemPointInTimeRecoveryDetails</a>

---


### MysqlMysqlDbSystemSecureConnectionsOutputReference <a name="MysqlMysqlDbSystemSecureConnectionsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemSecureConnectionsOutputReference;

new MysqlMysqlDbSystemSecureConnectionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.resetCertificateId">resetCertificateId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateId` <a name="resetCertificateId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.resetCertificateId"></a>

```java
public void resetCertificateId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.certificateGenerationTypeInput">certificateGenerationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.certificateIdInput">certificateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.certificateGenerationType">certificateGenerationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections">MysqlMysqlDbSystemSecureConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateGenerationTypeInput`<sup>Optional</sup> <a name="certificateGenerationTypeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.certificateGenerationTypeInput"></a>

```java
public java.lang.String getCertificateGenerationTypeInput();
```

- *Type:* java.lang.String

---

##### `certificateIdInput`<sup>Optional</sup> <a name="certificateIdInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.certificateIdInput"></a>

```java
public java.lang.String getCertificateIdInput();
```

- *Type:* java.lang.String

---

##### `certificateGenerationType`<sup>Required</sup> <a name="certificateGenerationType" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.certificateGenerationType"></a>

```java
public java.lang.String getCertificateGenerationType();
```

- *Type:* java.lang.String

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.internalValue"></a>

```java
public MysqlMysqlDbSystemSecureConnections getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections">MysqlMysqlDbSystemSecureConnections</a>

---


### MysqlMysqlDbSystemSourceOutputReference <a name="MysqlMysqlDbSystemSourceOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemSourceOutputReference;

new MysqlMysqlDbSystemSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resetBackupId">resetBackupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resetDbSystemId">resetDbSystemId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resetRecoveryPoint">resetRecoveryPoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resetSourceUrl">resetSourceUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackupId` <a name="resetBackupId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resetBackupId"></a>

```java
public void resetBackupId()
```

##### `resetDbSystemId` <a name="resetDbSystemId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resetDbSystemId"></a>

```java
public void resetDbSystemId()
```

##### `resetRecoveryPoint` <a name="resetRecoveryPoint" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resetRecoveryPoint"></a>

```java
public void resetRecoveryPoint()
```

##### `resetSourceUrl` <a name="resetSourceUrl" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resetSourceUrl"></a>

```java
public void resetSourceUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.backupIdInput">backupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.dbSystemIdInput">dbSystemIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.recoveryPointInput">recoveryPointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.sourceTypeInput">sourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.sourceUrlInput">sourceUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.backupId">backupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.dbSystemId">dbSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.recoveryPoint">recoveryPoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.sourceUrl">sourceUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource">MysqlMysqlDbSystemSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupIdInput`<sup>Optional</sup> <a name="backupIdInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.backupIdInput"></a>

```java
public java.lang.String getBackupIdInput();
```

- *Type:* java.lang.String

---

##### `dbSystemIdInput`<sup>Optional</sup> <a name="dbSystemIdInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.dbSystemIdInput"></a>

```java
public java.lang.String getDbSystemIdInput();
```

- *Type:* java.lang.String

---

##### `recoveryPointInput`<sup>Optional</sup> <a name="recoveryPointInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.recoveryPointInput"></a>

```java
public java.lang.String getRecoveryPointInput();
```

- *Type:* java.lang.String

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.sourceTypeInput"></a>

```java
public java.lang.String getSourceTypeInput();
```

- *Type:* java.lang.String

---

##### `sourceUrlInput`<sup>Optional</sup> <a name="sourceUrlInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.sourceUrlInput"></a>

```java
public java.lang.String getSourceUrlInput();
```

- *Type:* java.lang.String

---

##### `backupId`<sup>Required</sup> <a name="backupId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.backupId"></a>

```java
public java.lang.String getBackupId();
```

- *Type:* java.lang.String

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.dbSystemId"></a>

```java
public java.lang.String getDbSystemId();
```

- *Type:* java.lang.String

---

##### `recoveryPoint`<sup>Required</sup> <a name="recoveryPoint" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.recoveryPoint"></a>

```java
public java.lang.String getRecoveryPoint();
```

- *Type:* java.lang.String

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

---

##### `sourceUrl`<sup>Required</sup> <a name="sourceUrl" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.sourceUrl"></a>

```java
public java.lang.String getSourceUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.internalValue"></a>

```java
public MysqlMysqlDbSystemSource getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource">MysqlMysqlDbSystemSource</a>

---


### MysqlMysqlDbSystemTimeoutsOutputReference <a name="MysqlMysqlDbSystemTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_db_system.MysqlMysqlDbSystemTimeoutsOutputReference;

new MysqlMysqlDbSystemTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts">MysqlMysqlDbSystemTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts">MysqlMysqlDbSystemTimeouts</a>

---



