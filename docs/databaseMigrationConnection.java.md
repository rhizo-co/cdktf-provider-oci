# `databaseMigrationConnection` Submodule <a name="`databaseMigrationConnection` Submodule" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseMigrationConnection <a name="DatabaseMigrationConnection" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection oci_database_migration_connection}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_connection.DatabaseMigrationConnection;

DatabaseMigrationConnection.Builder.create(Construct scope, java.lang.String id)
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
    .connectionType(java.lang.String)
    .displayName(java.lang.String)
    .keyId(java.lang.String)
    .password(java.lang.String)
    .technologyType(java.lang.String)
    .username(java.lang.String)
    .vaultId(java.lang.String)
//  .additionalAttributes(IResolvable)
//  .additionalAttributes(java.util.List<DatabaseMigrationConnectionAdditionalAttributes>)
//  .connectionString(java.lang.String)
//  .databaseId(java.lang.String)
//  .databaseName(java.lang.String)
//  .dbSystemId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .host(java.lang.String)
//  .id(java.lang.String)
//  .nsgIds(java.util.List<java.lang.String>)
//  .port(java.lang.Number)
//  .replicationPassword(java.lang.String)
//  .replicationUsername(java.lang.String)
//  .securityProtocol(java.lang.String)
//  .sshHost(java.lang.String)
//  .sshKey(java.lang.String)
//  .sshSudoLocation(java.lang.String)
//  .sshUser(java.lang.String)
//  .sslCa(java.lang.String)
//  .sslCert(java.lang.String)
//  .sslCrl(java.lang.String)
//  .sslKey(java.lang.String)
//  .sslMode(java.lang.String)
//  .subnetId(java.lang.String)
//  .timeouts(DatabaseMigrationConnectionTimeouts)
//  .wallet(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#compartment_id DatabaseMigrationConnection#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.connectionType">connectionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#connection_type DatabaseMigrationConnection#connection_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#display_name DatabaseMigrationConnection#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.keyId">keyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#key_id DatabaseMigrationConnection#key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#password DatabaseMigrationConnection#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.technologyType">technologyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#technology_type DatabaseMigrationConnection#technology_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#username DatabaseMigrationConnection#username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.vaultId">vaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#vault_id DatabaseMigrationConnection#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.additionalAttributes">additionalAttributes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributes">DatabaseMigrationConnectionAdditionalAttributes</a>></code> | additional_attributes block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.connectionString">connectionString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#connection_string DatabaseMigrationConnection#connection_string}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.databaseId">databaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#database_id DatabaseMigrationConnection#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#database_name DatabaseMigrationConnection#database_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.dbSystemId">dbSystemId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#db_system_id DatabaseMigrationConnection#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#defined_tags DatabaseMigrationConnection#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#description DatabaseMigrationConnection#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#freeform_tags DatabaseMigrationConnection#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.host">host</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#host DatabaseMigrationConnection#host}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#id DatabaseMigrationConnection#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#nsg_ids DatabaseMigrationConnection#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#port DatabaseMigrationConnection#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.replicationPassword">replicationPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#replication_password DatabaseMigrationConnection#replication_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.replicationUsername">replicationUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#replication_username DatabaseMigrationConnection#replication_username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.securityProtocol">securityProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#security_protocol DatabaseMigrationConnection#security_protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.sshHost">sshHost</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssh_host DatabaseMigrationConnection#ssh_host}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.sshKey">sshKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssh_key DatabaseMigrationConnection#ssh_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.sshSudoLocation">sshSudoLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssh_sudo_location DatabaseMigrationConnection#ssh_sudo_location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.sshUser">sshUser</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssh_user DatabaseMigrationConnection#ssh_user}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.sslCa">sslCa</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_ca DatabaseMigrationConnection#ssl_ca}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.sslCert">sslCert</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_cert DatabaseMigrationConnection#ssl_cert}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.sslCrl">sslCrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_crl DatabaseMigrationConnection#ssl_crl}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.sslKey">sslKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_key DatabaseMigrationConnection#ssl_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.sslMode">sslMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_mode DatabaseMigrationConnection#ssl_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#subnet_id DatabaseMigrationConnection#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts">DatabaseMigrationConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.wallet">wallet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#wallet DatabaseMigrationConnection#wallet}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#compartment_id DatabaseMigrationConnection#compartment_id}.

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.connectionType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#connection_type DatabaseMigrationConnection#connection_type}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#display_name DatabaseMigrationConnection#display_name}.

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.keyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#key_id DatabaseMigrationConnection#key_id}.

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.password"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#password DatabaseMigrationConnection#password}.

---

##### `technologyType`<sup>Required</sup> <a name="technologyType" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.technologyType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#technology_type DatabaseMigrationConnection#technology_type}.

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.username"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#username DatabaseMigrationConnection#username}.

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.vaultId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#vault_id DatabaseMigrationConnection#vault_id}.

---

##### `additionalAttributes`<sup>Optional</sup> <a name="additionalAttributes" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.additionalAttributes"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributes">DatabaseMigrationConnectionAdditionalAttributes</a>>

additional_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#additional_attributes DatabaseMigrationConnection#additional_attributes}

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.connectionString"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#connection_string DatabaseMigrationConnection#connection_string}.

---

##### `databaseId`<sup>Optional</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.databaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#database_id DatabaseMigrationConnection#database_id}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.databaseName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#database_name DatabaseMigrationConnection#database_name}.

---

##### `dbSystemId`<sup>Optional</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.dbSystemId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#db_system_id DatabaseMigrationConnection#db_system_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#defined_tags DatabaseMigrationConnection#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#description DatabaseMigrationConnection#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#freeform_tags DatabaseMigrationConnection#freeform_tags}.

---

##### `host`<sup>Optional</sup> <a name="host" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.host"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#host DatabaseMigrationConnection#host}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#id DatabaseMigrationConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.nsgIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#nsg_ids DatabaseMigrationConnection#nsg_ids}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#port DatabaseMigrationConnection#port}.

---

##### `replicationPassword`<sup>Optional</sup> <a name="replicationPassword" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.replicationPassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#replication_password DatabaseMigrationConnection#replication_password}.

---

##### `replicationUsername`<sup>Optional</sup> <a name="replicationUsername" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.replicationUsername"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#replication_username DatabaseMigrationConnection#replication_username}.

---

##### `securityProtocol`<sup>Optional</sup> <a name="securityProtocol" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.securityProtocol"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#security_protocol DatabaseMigrationConnection#security_protocol}.

---

##### `sshHost`<sup>Optional</sup> <a name="sshHost" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.sshHost"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssh_host DatabaseMigrationConnection#ssh_host}.

---

##### `sshKey`<sup>Optional</sup> <a name="sshKey" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.sshKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssh_key DatabaseMigrationConnection#ssh_key}.

---

##### `sshSudoLocation`<sup>Optional</sup> <a name="sshSudoLocation" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.sshSudoLocation"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssh_sudo_location DatabaseMigrationConnection#ssh_sudo_location}.

---

##### `sshUser`<sup>Optional</sup> <a name="sshUser" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.sshUser"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssh_user DatabaseMigrationConnection#ssh_user}.

---

##### `sslCa`<sup>Optional</sup> <a name="sslCa" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.sslCa"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_ca DatabaseMigrationConnection#ssl_ca}.

---

##### `sslCert`<sup>Optional</sup> <a name="sslCert" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.sslCert"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_cert DatabaseMigrationConnection#ssl_cert}.

---

##### `sslCrl`<sup>Optional</sup> <a name="sslCrl" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.sslCrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_crl DatabaseMigrationConnection#ssl_crl}.

---

##### `sslKey`<sup>Optional</sup> <a name="sslKey" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.sslKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_key DatabaseMigrationConnection#ssl_key}.

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.sslMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_mode DatabaseMigrationConnection#ssl_mode}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#subnet_id DatabaseMigrationConnection#subnet_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts">DatabaseMigrationConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#timeouts DatabaseMigrationConnection#timeouts}

---

##### `wallet`<sup>Optional</sup> <a name="wallet" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.Initializer.parameter.wallet"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#wallet DatabaseMigrationConnection#wallet}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.putAdditionalAttributes">putAdditionalAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetAdditionalAttributes">resetAdditionalAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetConnectionString">resetConnectionString</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetDatabaseId">resetDatabaseId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetDbSystemId">resetDbSystemId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetNsgIds">resetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetReplicationPassword">resetReplicationPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetReplicationUsername">resetReplicationUsername</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSecurityProtocol">resetSecurityProtocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSshHost">resetSshHost</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSshKey">resetSshKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSshSudoLocation">resetSshSudoLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSshUser">resetSshUser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSslCa">resetSslCa</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSslCert">resetSslCert</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSslCrl">resetSslCrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSslKey">resetSslKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSslMode">resetSslMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetWallet">resetWallet</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdditionalAttributes` <a name="putAdditionalAttributes" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.putAdditionalAttributes"></a>

```java
public void putAdditionalAttributes(IResolvable OR java.util.List<DatabaseMigrationConnectionAdditionalAttributes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.putAdditionalAttributes.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributes">DatabaseMigrationConnectionAdditionalAttributes</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.putTimeouts"></a>

```java
public void putTimeouts(DatabaseMigrationConnectionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts">DatabaseMigrationConnectionTimeouts</a>

---

##### `resetAdditionalAttributes` <a name="resetAdditionalAttributes" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetAdditionalAttributes"></a>

```java
public void resetAdditionalAttributes()
```

##### `resetConnectionString` <a name="resetConnectionString" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetConnectionString"></a>

```java
public void resetConnectionString()
```

##### `resetDatabaseId` <a name="resetDatabaseId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetDatabaseId"></a>

```java
public void resetDatabaseId()
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetDatabaseName"></a>

```java
public void resetDatabaseName()
```

##### `resetDbSystemId` <a name="resetDbSystemId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetDbSystemId"></a>

```java
public void resetDbSystemId()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetHost` <a name="resetHost" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetHost"></a>

```java
public void resetHost()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetId"></a>

```java
public void resetId()
```

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetNsgIds"></a>

```java
public void resetNsgIds()
```

##### `resetPort` <a name="resetPort" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetPort"></a>

```java
public void resetPort()
```

##### `resetReplicationPassword` <a name="resetReplicationPassword" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetReplicationPassword"></a>

```java
public void resetReplicationPassword()
```

##### `resetReplicationUsername` <a name="resetReplicationUsername" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetReplicationUsername"></a>

```java
public void resetReplicationUsername()
```

##### `resetSecurityProtocol` <a name="resetSecurityProtocol" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSecurityProtocol"></a>

```java
public void resetSecurityProtocol()
```

##### `resetSshHost` <a name="resetSshHost" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSshHost"></a>

```java
public void resetSshHost()
```

##### `resetSshKey` <a name="resetSshKey" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSshKey"></a>

```java
public void resetSshKey()
```

##### `resetSshSudoLocation` <a name="resetSshSudoLocation" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSshSudoLocation"></a>

```java
public void resetSshSudoLocation()
```

##### `resetSshUser` <a name="resetSshUser" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSshUser"></a>

```java
public void resetSshUser()
```

##### `resetSslCa` <a name="resetSslCa" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSslCa"></a>

```java
public void resetSslCa()
```

##### `resetSslCert` <a name="resetSslCert" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSslCert"></a>

```java
public void resetSslCert()
```

##### `resetSslCrl` <a name="resetSslCrl" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSslCrl"></a>

```java
public void resetSslCrl()
```

##### `resetSslKey` <a name="resetSslKey" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSslKey"></a>

```java
public void resetSslKey()
```

##### `resetSslMode` <a name="resetSslMode" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSslMode"></a>

```java
public void resetSslMode()
```

##### `resetSubnetId` <a name="resetSubnetId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetSubnetId"></a>

```java
public void resetSubnetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWallet` <a name="resetWallet" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.resetWallet"></a>

```java
public void resetWallet()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseMigrationConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_connection.DatabaseMigrationConnection;

DatabaseMigrationConnection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_connection.DatabaseMigrationConnection;

DatabaseMigrationConnection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_connection.DatabaseMigrationConnection;

DatabaseMigrationConnection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_connection.DatabaseMigrationConnection;

DatabaseMigrationConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseMigrationConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseMigrationConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseMigrationConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseMigrationConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseMigrationConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.additionalAttributes">additionalAttributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList">DatabaseMigrationConnectionAdditionalAttributesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.ingressIps">ingressIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList">DatabaseMigrationConnectionIngressIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.privateEndpointId">privateEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.secretId">secretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference">DatabaseMigrationConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.additionalAttributesInput">additionalAttributesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributes">DatabaseMigrationConnectionAdditionalAttributes</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.connectionStringInput">connectionStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.connectionTypeInput">connectionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.databaseIdInput">databaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.dbSystemIdInput">dbSystemIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.keyIdInput">keyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.nsgIdsInput">nsgIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.replicationPasswordInput">replicationPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.replicationUsernameInput">replicationUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.securityProtocolInput">securityProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshHostInput">sshHostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshKeyInput">sshKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshSudoLocationInput">sshSudoLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshUserInput">sshUserInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslCaInput">sslCaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslCertInput">sslCertInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslCrlInput">sslCrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslKeyInput">sslKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslModeInput">sslModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.technologyTypeInput">technologyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts">DatabaseMigrationConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.vaultIdInput">vaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.walletInput">walletInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.connectionString">connectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.connectionType">connectionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.databaseId">databaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.dbSystemId">dbSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.replicationPassword">replicationPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.replicationUsername">replicationUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.securityProtocol">securityProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshHost">sshHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshKey">sshKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshSudoLocation">sshSudoLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshUser">sshUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslCa">sslCa</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslCert">sslCert</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslCrl">sslCrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslKey">sslKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.technologyType">technologyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.vaultId">vaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.wallet">wallet</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `additionalAttributes`<sup>Required</sup> <a name="additionalAttributes" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.additionalAttributes"></a>

```java
public DatabaseMigrationConnectionAdditionalAttributesList getAdditionalAttributes();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList">DatabaseMigrationConnectionAdditionalAttributesList</a>

---

##### `ingressIps`<sup>Required</sup> <a name="ingressIps" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.ingressIps"></a>

```java
public DatabaseMigrationConnectionIngressIpsList getIngressIps();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList">DatabaseMigrationConnectionIngressIpsList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `privateEndpointId`<sup>Required</sup> <a name="privateEndpointId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.privateEndpointId"></a>

```java
public java.lang.String getPrivateEndpointId();
```

- *Type:* java.lang.String

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.timeouts"></a>

```java
public DatabaseMigrationConnectionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference">DatabaseMigrationConnectionTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `additionalAttributesInput`<sup>Optional</sup> <a name="additionalAttributesInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.additionalAttributesInput"></a>

```java
public java.lang.Object getAdditionalAttributesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributes">DatabaseMigrationConnectionAdditionalAttributes</a>>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `connectionStringInput`<sup>Optional</sup> <a name="connectionStringInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.connectionStringInput"></a>

```java
public java.lang.String getConnectionStringInput();
```

- *Type:* java.lang.String

---

##### `connectionTypeInput`<sup>Optional</sup> <a name="connectionTypeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.connectionTypeInput"></a>

```java
public java.lang.String getConnectionTypeInput();
```

- *Type:* java.lang.String

---

##### `databaseIdInput`<sup>Optional</sup> <a name="databaseIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.databaseIdInput"></a>

```java
public java.lang.String getDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `dbSystemIdInput`<sup>Optional</sup> <a name="dbSystemIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.dbSystemIdInput"></a>

```java
public java.lang.String getDbSystemIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.keyIdInput"></a>

```java
public java.lang.String getKeyIdInput();
```

- *Type:* java.lang.String

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.nsgIdsInput"></a>

```java
public java.util.List<java.lang.String> getNsgIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `replicationPasswordInput`<sup>Optional</sup> <a name="replicationPasswordInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.replicationPasswordInput"></a>

```java
public java.lang.String getReplicationPasswordInput();
```

- *Type:* java.lang.String

---

##### `replicationUsernameInput`<sup>Optional</sup> <a name="replicationUsernameInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.replicationUsernameInput"></a>

```java
public java.lang.String getReplicationUsernameInput();
```

- *Type:* java.lang.String

---

##### `securityProtocolInput`<sup>Optional</sup> <a name="securityProtocolInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.securityProtocolInput"></a>

```java
public java.lang.String getSecurityProtocolInput();
```

- *Type:* java.lang.String

---

##### `sshHostInput`<sup>Optional</sup> <a name="sshHostInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshHostInput"></a>

```java
public java.lang.String getSshHostInput();
```

- *Type:* java.lang.String

---

##### `sshKeyInput`<sup>Optional</sup> <a name="sshKeyInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshKeyInput"></a>

```java
public java.lang.String getSshKeyInput();
```

- *Type:* java.lang.String

---

##### `sshSudoLocationInput`<sup>Optional</sup> <a name="sshSudoLocationInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshSudoLocationInput"></a>

```java
public java.lang.String getSshSudoLocationInput();
```

- *Type:* java.lang.String

---

##### `sshUserInput`<sup>Optional</sup> <a name="sshUserInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshUserInput"></a>

```java
public java.lang.String getSshUserInput();
```

- *Type:* java.lang.String

---

##### `sslCaInput`<sup>Optional</sup> <a name="sslCaInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslCaInput"></a>

```java
public java.lang.String getSslCaInput();
```

- *Type:* java.lang.String

---

##### `sslCertInput`<sup>Optional</sup> <a name="sslCertInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslCertInput"></a>

```java
public java.lang.String getSslCertInput();
```

- *Type:* java.lang.String

---

##### `sslCrlInput`<sup>Optional</sup> <a name="sslCrlInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslCrlInput"></a>

```java
public java.lang.String getSslCrlInput();
```

- *Type:* java.lang.String

---

##### `sslKeyInput`<sup>Optional</sup> <a name="sslKeyInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslKeyInput"></a>

```java
public java.lang.String getSslKeyInput();
```

- *Type:* java.lang.String

---

##### `sslModeInput`<sup>Optional</sup> <a name="sslModeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslModeInput"></a>

```java
public java.lang.String getSslModeInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `technologyTypeInput`<sup>Optional</sup> <a name="technologyTypeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.technologyTypeInput"></a>

```java
public java.lang.String getTechnologyTypeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts">DatabaseMigrationConnectionTimeouts</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `vaultIdInput`<sup>Optional</sup> <a name="vaultIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.vaultIdInput"></a>

```java
public java.lang.String getVaultIdInput();
```

- *Type:* java.lang.String

---

##### `walletInput`<sup>Optional</sup> <a name="walletInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.walletInput"></a>

```java
public java.lang.String getWalletInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.connectionString"></a>

```java
public java.lang.String getConnectionString();
```

- *Type:* java.lang.String

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.connectionType"></a>

```java
public java.lang.String getConnectionType();
```

- *Type:* java.lang.String

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.databaseId"></a>

```java
public java.lang.String getDatabaseId();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.dbSystemId"></a>

```java
public java.lang.String getDbSystemId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `replicationPassword`<sup>Required</sup> <a name="replicationPassword" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.replicationPassword"></a>

```java
public java.lang.String getReplicationPassword();
```

- *Type:* java.lang.String

---

##### `replicationUsername`<sup>Required</sup> <a name="replicationUsername" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.replicationUsername"></a>

```java
public java.lang.String getReplicationUsername();
```

- *Type:* java.lang.String

---

##### `securityProtocol`<sup>Required</sup> <a name="securityProtocol" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.securityProtocol"></a>

```java
public java.lang.String getSecurityProtocol();
```

- *Type:* java.lang.String

---

##### `sshHost`<sup>Required</sup> <a name="sshHost" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshHost"></a>

```java
public java.lang.String getSshHost();
```

- *Type:* java.lang.String

---

##### `sshKey`<sup>Required</sup> <a name="sshKey" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshKey"></a>

```java
public java.lang.String getSshKey();
```

- *Type:* java.lang.String

---

##### `sshSudoLocation`<sup>Required</sup> <a name="sshSudoLocation" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshSudoLocation"></a>

```java
public java.lang.String getSshSudoLocation();
```

- *Type:* java.lang.String

---

##### `sshUser`<sup>Required</sup> <a name="sshUser" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sshUser"></a>

```java
public java.lang.String getSshUser();
```

- *Type:* java.lang.String

---

##### `sslCa`<sup>Required</sup> <a name="sslCa" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslCa"></a>

```java
public java.lang.String getSslCa();
```

- *Type:* java.lang.String

---

##### `sslCert`<sup>Required</sup> <a name="sslCert" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslCert"></a>

```java
public java.lang.String getSslCert();
```

- *Type:* java.lang.String

---

##### `sslCrl`<sup>Required</sup> <a name="sslCrl" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslCrl"></a>

```java
public java.lang.String getSslCrl();
```

- *Type:* java.lang.String

---

##### `sslKey`<sup>Required</sup> <a name="sslKey" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslKey"></a>

```java
public java.lang.String getSslKey();
```

- *Type:* java.lang.String

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `technologyType`<sup>Required</sup> <a name="technologyType" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.technologyType"></a>

```java
public java.lang.String getTechnologyType();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.vaultId"></a>

```java
public java.lang.String getVaultId();
```

- *Type:* java.lang.String

---

##### `wallet`<sup>Required</sup> <a name="wallet" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.wallet"></a>

```java
public java.lang.String getWallet();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseMigrationConnectionAdditionalAttributes <a name="DatabaseMigrationConnectionAdditionalAttributes" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_connection.DatabaseMigrationConnectionAdditionalAttributes;

DatabaseMigrationConnectionAdditionalAttributes.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributes.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#name DatabaseMigrationConnection#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributes.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#value DatabaseMigrationConnection#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributes.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#name DatabaseMigrationConnection#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributes.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#value DatabaseMigrationConnection#value}.

---

### DatabaseMigrationConnectionConfig <a name="DatabaseMigrationConnectionConfig" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_connection.DatabaseMigrationConnectionConfig;

DatabaseMigrationConnectionConfig.builder()
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
    .connectionType(java.lang.String)
    .displayName(java.lang.String)
    .keyId(java.lang.String)
    .password(java.lang.String)
    .technologyType(java.lang.String)
    .username(java.lang.String)
    .vaultId(java.lang.String)
//  .additionalAttributes(IResolvable)
//  .additionalAttributes(java.util.List<DatabaseMigrationConnectionAdditionalAttributes>)
//  .connectionString(java.lang.String)
//  .databaseId(java.lang.String)
//  .databaseName(java.lang.String)
//  .dbSystemId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .host(java.lang.String)
//  .id(java.lang.String)
//  .nsgIds(java.util.List<java.lang.String>)
//  .port(java.lang.Number)
//  .replicationPassword(java.lang.String)
//  .replicationUsername(java.lang.String)
//  .securityProtocol(java.lang.String)
//  .sshHost(java.lang.String)
//  .sshKey(java.lang.String)
//  .sshSudoLocation(java.lang.String)
//  .sshUser(java.lang.String)
//  .sslCa(java.lang.String)
//  .sslCert(java.lang.String)
//  .sslCrl(java.lang.String)
//  .sslKey(java.lang.String)
//  .sslMode(java.lang.String)
//  .subnetId(java.lang.String)
//  .timeouts(DatabaseMigrationConnectionTimeouts)
//  .wallet(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#compartment_id DatabaseMigrationConnection#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.connectionType">connectionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#connection_type DatabaseMigrationConnection#connection_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#display_name DatabaseMigrationConnection#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.keyId">keyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#key_id DatabaseMigrationConnection#key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#password DatabaseMigrationConnection#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.technologyType">technologyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#technology_type DatabaseMigrationConnection#technology_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#username DatabaseMigrationConnection#username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.vaultId">vaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#vault_id DatabaseMigrationConnection#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.additionalAttributes">additionalAttributes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributes">DatabaseMigrationConnectionAdditionalAttributes</a>></code> | additional_attributes block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.connectionString">connectionString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#connection_string DatabaseMigrationConnection#connection_string}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.databaseId">databaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#database_id DatabaseMigrationConnection#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#database_name DatabaseMigrationConnection#database_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.dbSystemId">dbSystemId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#db_system_id DatabaseMigrationConnection#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#defined_tags DatabaseMigrationConnection#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#description DatabaseMigrationConnection#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#freeform_tags DatabaseMigrationConnection#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.host">host</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#host DatabaseMigrationConnection#host}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#id DatabaseMigrationConnection#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#nsg_ids DatabaseMigrationConnection#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#port DatabaseMigrationConnection#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.replicationPassword">replicationPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#replication_password DatabaseMigrationConnection#replication_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.replicationUsername">replicationUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#replication_username DatabaseMigrationConnection#replication_username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.securityProtocol">securityProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#security_protocol DatabaseMigrationConnection#security_protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sshHost">sshHost</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssh_host DatabaseMigrationConnection#ssh_host}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sshKey">sshKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssh_key DatabaseMigrationConnection#ssh_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sshSudoLocation">sshSudoLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssh_sudo_location DatabaseMigrationConnection#ssh_sudo_location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sshUser">sshUser</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssh_user DatabaseMigrationConnection#ssh_user}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sslCa">sslCa</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_ca DatabaseMigrationConnection#ssl_ca}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sslCert">sslCert</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_cert DatabaseMigrationConnection#ssl_cert}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sslCrl">sslCrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_crl DatabaseMigrationConnection#ssl_crl}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sslKey">sslKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_key DatabaseMigrationConnection#ssl_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_mode DatabaseMigrationConnection#ssl_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#subnet_id DatabaseMigrationConnection#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts">DatabaseMigrationConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.wallet">wallet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#wallet DatabaseMigrationConnection#wallet}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#compartment_id DatabaseMigrationConnection#compartment_id}.

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.connectionType"></a>

```java
public java.lang.String getConnectionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#connection_type DatabaseMigrationConnection#connection_type}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#display_name DatabaseMigrationConnection#display_name}.

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#key_id DatabaseMigrationConnection#key_id}.

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#password DatabaseMigrationConnection#password}.

---

##### `technologyType`<sup>Required</sup> <a name="technologyType" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.technologyType"></a>

```java
public java.lang.String getTechnologyType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#technology_type DatabaseMigrationConnection#technology_type}.

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#username DatabaseMigrationConnection#username}.

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.vaultId"></a>

```java
public java.lang.String getVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#vault_id DatabaseMigrationConnection#vault_id}.

---

##### `additionalAttributes`<sup>Optional</sup> <a name="additionalAttributes" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.additionalAttributes"></a>

```java
public java.lang.Object getAdditionalAttributes();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributes">DatabaseMigrationConnectionAdditionalAttributes</a>>

additional_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#additional_attributes DatabaseMigrationConnection#additional_attributes}

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.connectionString"></a>

```java
public java.lang.String getConnectionString();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#connection_string DatabaseMigrationConnection#connection_string}.

---

##### `databaseId`<sup>Optional</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.databaseId"></a>

```java
public java.lang.String getDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#database_id DatabaseMigrationConnection#database_id}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#database_name DatabaseMigrationConnection#database_name}.

---

##### `dbSystemId`<sup>Optional</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.dbSystemId"></a>

```java
public java.lang.String getDbSystemId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#db_system_id DatabaseMigrationConnection#db_system_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#defined_tags DatabaseMigrationConnection#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#description DatabaseMigrationConnection#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#freeform_tags DatabaseMigrationConnection#freeform_tags}.

---

##### `host`<sup>Optional</sup> <a name="host" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#host DatabaseMigrationConnection#host}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#id DatabaseMigrationConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#nsg_ids DatabaseMigrationConnection#nsg_ids}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#port DatabaseMigrationConnection#port}.

---

##### `replicationPassword`<sup>Optional</sup> <a name="replicationPassword" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.replicationPassword"></a>

```java
public java.lang.String getReplicationPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#replication_password DatabaseMigrationConnection#replication_password}.

---

##### `replicationUsername`<sup>Optional</sup> <a name="replicationUsername" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.replicationUsername"></a>

```java
public java.lang.String getReplicationUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#replication_username DatabaseMigrationConnection#replication_username}.

---

##### `securityProtocol`<sup>Optional</sup> <a name="securityProtocol" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.securityProtocol"></a>

```java
public java.lang.String getSecurityProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#security_protocol DatabaseMigrationConnection#security_protocol}.

---

##### `sshHost`<sup>Optional</sup> <a name="sshHost" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sshHost"></a>

```java
public java.lang.String getSshHost();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssh_host DatabaseMigrationConnection#ssh_host}.

---

##### `sshKey`<sup>Optional</sup> <a name="sshKey" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sshKey"></a>

```java
public java.lang.String getSshKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssh_key DatabaseMigrationConnection#ssh_key}.

---

##### `sshSudoLocation`<sup>Optional</sup> <a name="sshSudoLocation" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sshSudoLocation"></a>

```java
public java.lang.String getSshSudoLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssh_sudo_location DatabaseMigrationConnection#ssh_sudo_location}.

---

##### `sshUser`<sup>Optional</sup> <a name="sshUser" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sshUser"></a>

```java
public java.lang.String getSshUser();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssh_user DatabaseMigrationConnection#ssh_user}.

---

##### `sslCa`<sup>Optional</sup> <a name="sslCa" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sslCa"></a>

```java
public java.lang.String getSslCa();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_ca DatabaseMigrationConnection#ssl_ca}.

---

##### `sslCert`<sup>Optional</sup> <a name="sslCert" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sslCert"></a>

```java
public java.lang.String getSslCert();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_cert DatabaseMigrationConnection#ssl_cert}.

---

##### `sslCrl`<sup>Optional</sup> <a name="sslCrl" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sslCrl"></a>

```java
public java.lang.String getSslCrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_crl DatabaseMigrationConnection#ssl_crl}.

---

##### `sslKey`<sup>Optional</sup> <a name="sslKey" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sslKey"></a>

```java
public java.lang.String getSslKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_key DatabaseMigrationConnection#ssl_key}.

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#ssl_mode DatabaseMigrationConnection#ssl_mode}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#subnet_id DatabaseMigrationConnection#subnet_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.timeouts"></a>

```java
public DatabaseMigrationConnectionTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts">DatabaseMigrationConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#timeouts DatabaseMigrationConnection#timeouts}

---

##### `wallet`<sup>Optional</sup> <a name="wallet" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionConfig.property.wallet"></a>

```java
public java.lang.String getWallet();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#wallet DatabaseMigrationConnection#wallet}.

---

### DatabaseMigrationConnectionIngressIps <a name="DatabaseMigrationConnectionIngressIps" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIps.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_connection.DatabaseMigrationConnectionIngressIps;

DatabaseMigrationConnectionIngressIps.builder()
    .build();
```


### DatabaseMigrationConnectionTimeouts <a name="DatabaseMigrationConnectionTimeouts" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_connection.DatabaseMigrationConnectionTimeouts;

DatabaseMigrationConnectionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#create DatabaseMigrationConnection#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#delete DatabaseMigrationConnection#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#update DatabaseMigrationConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#create DatabaseMigrationConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#delete DatabaseMigrationConnection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_connection#update DatabaseMigrationConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseMigrationConnectionAdditionalAttributesList <a name="DatabaseMigrationConnectionAdditionalAttributesList" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_connection.DatabaseMigrationConnectionAdditionalAttributesList;

new DatabaseMigrationConnectionAdditionalAttributesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.get"></a>

```java
public DatabaseMigrationConnectionAdditionalAttributesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributes">DatabaseMigrationConnectionAdditionalAttributes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributes">DatabaseMigrationConnectionAdditionalAttributes</a>>

---


### DatabaseMigrationConnectionAdditionalAttributesOutputReference <a name="DatabaseMigrationConnectionAdditionalAttributesOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_connection.DatabaseMigrationConnectionAdditionalAttributesOutputReference;

new DatabaseMigrationConnectionAdditionalAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributes">DatabaseMigrationConnectionAdditionalAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionAdditionalAttributes">DatabaseMigrationConnectionAdditionalAttributes</a>

---


### DatabaseMigrationConnectionIngressIpsList <a name="DatabaseMigrationConnectionIngressIpsList" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_connection.DatabaseMigrationConnectionIngressIpsList;

new DatabaseMigrationConnectionIngressIpsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.get"></a>

```java
public DatabaseMigrationConnectionIngressIpsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseMigrationConnectionIngressIpsOutputReference <a name="DatabaseMigrationConnectionIngressIpsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_connection.DatabaseMigrationConnectionIngressIpsOutputReference;

new DatabaseMigrationConnectionIngressIpsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.property.ingressIp">ingressIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIps">DatabaseMigrationConnectionIngressIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ingressIp`<sup>Required</sup> <a name="ingressIp" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.property.ingressIp"></a>

```java
public java.lang.String getIngressIp();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIpsOutputReference.property.internalValue"></a>

```java
public DatabaseMigrationConnectionIngressIps getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionIngressIps">DatabaseMigrationConnectionIngressIps</a>

---


### DatabaseMigrationConnectionTimeoutsOutputReference <a name="DatabaseMigrationConnectionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_connection.DatabaseMigrationConnectionTimeoutsOutputReference;

new DatabaseMigrationConnectionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts">DatabaseMigrationConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseMigrationConnection.DatabaseMigrationConnectionTimeouts">DatabaseMigrationConnectionTimeouts</a>

---



