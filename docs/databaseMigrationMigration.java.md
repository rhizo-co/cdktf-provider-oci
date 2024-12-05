# `databaseMigrationMigration` Submodule <a name="`databaseMigrationMigration` Submodule" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseMigrationMigration <a name="DatabaseMigrationMigration" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration oci_database_migration_migration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigration;

DatabaseMigrationMigration.Builder.create(Construct scope, java.lang.String id)
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
    .databaseCombination(java.lang.String)
    .sourceDatabaseConnectionId(java.lang.String)
    .targetDatabaseConnectionId(java.lang.String)
    .type(java.lang.String)
//  .advancedParameters(IResolvable)
//  .advancedParameters(java.util.List<DatabaseMigrationMigrationAdvancedParameters>)
//  .advisorSettings(DatabaseMigrationMigrationAdvisorSettings)
//  .bulkIncludeExcludeData(java.lang.String)
//  .dataTransferMediumDetails(DatabaseMigrationMigrationDataTransferMediumDetails)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .excludeObjects(IResolvable)
//  .excludeObjects(java.util.List<DatabaseMigrationMigrationExcludeObjects>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .ggsDetails(DatabaseMigrationMigrationGgsDetails)
//  .hubDetails(DatabaseMigrationMigrationHubDetails)
//  .id(java.lang.String)
//  .includeObjects(IResolvable)
//  .includeObjects(java.util.List<DatabaseMigrationMigrationIncludeObjects>)
//  .initialLoadSettings(DatabaseMigrationMigrationInitialLoadSettings)
//  .sourceContainerDatabaseConnectionId(java.lang.String)
//  .timeouts(DatabaseMigrationMigrationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#compartment_id DatabaseMigrationMigration#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.databaseCombination">databaseCombination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#database_combination DatabaseMigrationMigration#database_combination}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.sourceDatabaseConnectionId">sourceDatabaseConnectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#source_database_connection_id DatabaseMigrationMigration#source_database_connection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.targetDatabaseConnectionId">targetDatabaseConnectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#target_database_connection_id DatabaseMigrationMigration#target_database_connection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.advancedParameters">advancedParameters</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters">DatabaseMigrationMigrationAdvancedParameters</a>></code> | advanced_parameters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.advisorSettings">advisorSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings">DatabaseMigrationMigrationAdvisorSettings</a></code> | advisor_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.bulkIncludeExcludeData">bulkIncludeExcludeData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#bulk_include_exclude_data DatabaseMigrationMigration#bulk_include_exclude_data}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.dataTransferMediumDetails">dataTransferMediumDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails">DatabaseMigrationMigrationDataTransferMediumDetails</a></code> | data_transfer_medium_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#defined_tags DatabaseMigrationMigration#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#description DatabaseMigrationMigration#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#display_name DatabaseMigrationMigration#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.excludeObjects">excludeObjects</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects">DatabaseMigrationMigrationExcludeObjects</a>></code> | exclude_objects block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#freeform_tags DatabaseMigrationMigration#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.ggsDetails">ggsDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails">DatabaseMigrationMigrationGgsDetails</a></code> | ggs_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.hubDetails">hubDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails">DatabaseMigrationMigrationHubDetails</a></code> | hub_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#id DatabaseMigrationMigration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.includeObjects">includeObjects</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects">DatabaseMigrationMigrationIncludeObjects</a>></code> | include_objects block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.initialLoadSettings">initialLoadSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings">DatabaseMigrationMigrationInitialLoadSettings</a></code> | initial_load_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.sourceContainerDatabaseConnectionId">sourceContainerDatabaseConnectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#source_container_database_connection_id DatabaseMigrationMigration#source_container_database_connection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts">DatabaseMigrationMigrationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#compartment_id DatabaseMigrationMigration#compartment_id}.

---

##### `databaseCombination`<sup>Required</sup> <a name="databaseCombination" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.databaseCombination"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#database_combination DatabaseMigrationMigration#database_combination}.

---

##### `sourceDatabaseConnectionId`<sup>Required</sup> <a name="sourceDatabaseConnectionId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.sourceDatabaseConnectionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#source_database_connection_id DatabaseMigrationMigration#source_database_connection_id}.

---

##### `targetDatabaseConnectionId`<sup>Required</sup> <a name="targetDatabaseConnectionId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.targetDatabaseConnectionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#target_database_connection_id DatabaseMigrationMigration#target_database_connection_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}.

---

##### `advancedParameters`<sup>Optional</sup> <a name="advancedParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.advancedParameters"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters">DatabaseMigrationMigrationAdvancedParameters</a>>

advanced_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#advanced_parameters DatabaseMigrationMigration#advanced_parameters}

---

##### `advisorSettings`<sup>Optional</sup> <a name="advisorSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.advisorSettings"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings">DatabaseMigrationMigrationAdvisorSettings</a>

advisor_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#advisor_settings DatabaseMigrationMigration#advisor_settings}

---

##### `bulkIncludeExcludeData`<sup>Optional</sup> <a name="bulkIncludeExcludeData" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.bulkIncludeExcludeData"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#bulk_include_exclude_data DatabaseMigrationMigration#bulk_include_exclude_data}.

---

##### `dataTransferMediumDetails`<sup>Optional</sup> <a name="dataTransferMediumDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.dataTransferMediumDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails">DatabaseMigrationMigrationDataTransferMediumDetails</a>

data_transfer_medium_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#data_transfer_medium_details DatabaseMigrationMigration#data_transfer_medium_details}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#defined_tags DatabaseMigrationMigration#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#description DatabaseMigrationMigration#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#display_name DatabaseMigrationMigration#display_name}.

---

##### `excludeObjects`<sup>Optional</sup> <a name="excludeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.excludeObjects"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects">DatabaseMigrationMigrationExcludeObjects</a>>

exclude_objects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#exclude_objects DatabaseMigrationMigration#exclude_objects}

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#freeform_tags DatabaseMigrationMigration#freeform_tags}.

---

##### `ggsDetails`<sup>Optional</sup> <a name="ggsDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.ggsDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails">DatabaseMigrationMigrationGgsDetails</a>

ggs_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#ggs_details DatabaseMigrationMigration#ggs_details}

---

##### `hubDetails`<sup>Optional</sup> <a name="hubDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.hubDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails">DatabaseMigrationMigrationHubDetails</a>

hub_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#hub_details DatabaseMigrationMigration#hub_details}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#id DatabaseMigrationMigration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeObjects`<sup>Optional</sup> <a name="includeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.includeObjects"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects">DatabaseMigrationMigrationIncludeObjects</a>>

include_objects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#include_objects DatabaseMigrationMigration#include_objects}

---

##### `initialLoadSettings`<sup>Optional</sup> <a name="initialLoadSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.initialLoadSettings"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings">DatabaseMigrationMigrationInitialLoadSettings</a>

initial_load_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#initial_load_settings DatabaseMigrationMigration#initial_load_settings}

---

##### `sourceContainerDatabaseConnectionId`<sup>Optional</sup> <a name="sourceContainerDatabaseConnectionId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.sourceContainerDatabaseConnectionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#source_container_database_connection_id DatabaseMigrationMigration#source_container_database_connection_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts">DatabaseMigrationMigrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#timeouts DatabaseMigrationMigration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putAdvancedParameters">putAdvancedParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putAdvisorSettings">putAdvisorSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putDataTransferMediumDetails">putDataTransferMediumDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putExcludeObjects">putExcludeObjects</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putGgsDetails">putGgsDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putHubDetails">putHubDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putIncludeObjects">putIncludeObjects</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putInitialLoadSettings">putInitialLoadSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetAdvancedParameters">resetAdvancedParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetAdvisorSettings">resetAdvisorSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetBulkIncludeExcludeData">resetBulkIncludeExcludeData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetDataTransferMediumDetails">resetDataTransferMediumDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetExcludeObjects">resetExcludeObjects</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetGgsDetails">resetGgsDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetHubDetails">resetHubDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetIncludeObjects">resetIncludeObjects</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetInitialLoadSettings">resetInitialLoadSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetSourceContainerDatabaseConnectionId">resetSourceContainerDatabaseConnectionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdvancedParameters` <a name="putAdvancedParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putAdvancedParameters"></a>

```java
public void putAdvancedParameters(IResolvable OR java.util.List<DatabaseMigrationMigrationAdvancedParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putAdvancedParameters.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters">DatabaseMigrationMigrationAdvancedParameters</a>>

---

##### `putAdvisorSettings` <a name="putAdvisorSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putAdvisorSettings"></a>

```java
public void putAdvisorSettings(DatabaseMigrationMigrationAdvisorSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putAdvisorSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings">DatabaseMigrationMigrationAdvisorSettings</a>

---

##### `putDataTransferMediumDetails` <a name="putDataTransferMediumDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putDataTransferMediumDetails"></a>

```java
public void putDataTransferMediumDetails(DatabaseMigrationMigrationDataTransferMediumDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putDataTransferMediumDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails">DatabaseMigrationMigrationDataTransferMediumDetails</a>

---

##### `putExcludeObjects` <a name="putExcludeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putExcludeObjects"></a>

```java
public void putExcludeObjects(IResolvable OR java.util.List<DatabaseMigrationMigrationExcludeObjects> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putExcludeObjects.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects">DatabaseMigrationMigrationExcludeObjects</a>>

---

##### `putGgsDetails` <a name="putGgsDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putGgsDetails"></a>

```java
public void putGgsDetails(DatabaseMigrationMigrationGgsDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putGgsDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails">DatabaseMigrationMigrationGgsDetails</a>

---

##### `putHubDetails` <a name="putHubDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putHubDetails"></a>

```java
public void putHubDetails(DatabaseMigrationMigrationHubDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putHubDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails">DatabaseMigrationMigrationHubDetails</a>

---

##### `putIncludeObjects` <a name="putIncludeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putIncludeObjects"></a>

```java
public void putIncludeObjects(IResolvable OR java.util.List<DatabaseMigrationMigrationIncludeObjects> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putIncludeObjects.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects">DatabaseMigrationMigrationIncludeObjects</a>>

---

##### `putInitialLoadSettings` <a name="putInitialLoadSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putInitialLoadSettings"></a>

```java
public void putInitialLoadSettings(DatabaseMigrationMigrationInitialLoadSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putInitialLoadSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings">DatabaseMigrationMigrationInitialLoadSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putTimeouts"></a>

```java
public void putTimeouts(DatabaseMigrationMigrationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts">DatabaseMigrationMigrationTimeouts</a>

---

##### `resetAdvancedParameters` <a name="resetAdvancedParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetAdvancedParameters"></a>

```java
public void resetAdvancedParameters()
```

##### `resetAdvisorSettings` <a name="resetAdvisorSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetAdvisorSettings"></a>

```java
public void resetAdvisorSettings()
```

##### `resetBulkIncludeExcludeData` <a name="resetBulkIncludeExcludeData" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetBulkIncludeExcludeData"></a>

```java
public void resetBulkIncludeExcludeData()
```

##### `resetDataTransferMediumDetails` <a name="resetDataTransferMediumDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetDataTransferMediumDetails"></a>

```java
public void resetDataTransferMediumDetails()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetExcludeObjects` <a name="resetExcludeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetExcludeObjects"></a>

```java
public void resetExcludeObjects()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetGgsDetails` <a name="resetGgsDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetGgsDetails"></a>

```java
public void resetGgsDetails()
```

##### `resetHubDetails` <a name="resetHubDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetHubDetails"></a>

```java
public void resetHubDetails()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetId"></a>

```java
public void resetId()
```

##### `resetIncludeObjects` <a name="resetIncludeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetIncludeObjects"></a>

```java
public void resetIncludeObjects()
```

##### `resetInitialLoadSettings` <a name="resetInitialLoadSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetInitialLoadSettings"></a>

```java
public void resetInitialLoadSettings()
```

##### `resetSourceContainerDatabaseConnectionId` <a name="resetSourceContainerDatabaseConnectionId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetSourceContainerDatabaseConnectionId"></a>

```java
public void resetSourceContainerDatabaseConnectionId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseMigrationMigration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigration;

DatabaseMigrationMigration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigration;

DatabaseMigrationMigration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigration;

DatabaseMigrationMigration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigration;

DatabaseMigrationMigration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseMigrationMigration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseMigrationMigration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseMigrationMigration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseMigrationMigration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseMigrationMigration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.advancedParameters">advancedParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList">DatabaseMigrationMigrationAdvancedParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.advisorSettings">advisorSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference">DatabaseMigrationMigrationAdvisorSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.dataTransferMediumDetails">dataTransferMediumDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference">DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.excludeObjects">excludeObjects</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList">DatabaseMigrationMigrationExcludeObjectsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.executingJobId">executingJobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.ggsDetails">ggsDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference">DatabaseMigrationMigrationGgsDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.hubDetails">hubDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference">DatabaseMigrationMigrationHubDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.includeObjects">includeObjects</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList">DatabaseMigrationMigrationIncludeObjectsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.initialLoadSettings">initialLoadSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference">DatabaseMigrationMigrationInitialLoadSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeLastMigration">timeLastMigration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference">DatabaseMigrationMigrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.waitAfter">waitAfter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.advancedParametersInput">advancedParametersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters">DatabaseMigrationMigrationAdvancedParameters</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.advisorSettingsInput">advisorSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings">DatabaseMigrationMigrationAdvisorSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.bulkIncludeExcludeDataInput">bulkIncludeExcludeDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.databaseCombinationInput">databaseCombinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.dataTransferMediumDetailsInput">dataTransferMediumDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails">DatabaseMigrationMigrationDataTransferMediumDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.excludeObjectsInput">excludeObjectsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects">DatabaseMigrationMigrationExcludeObjects</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.ggsDetailsInput">ggsDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails">DatabaseMigrationMigrationGgsDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.hubDetailsInput">hubDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails">DatabaseMigrationMigrationHubDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.includeObjectsInput">includeObjectsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects">DatabaseMigrationMigrationIncludeObjects</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.initialLoadSettingsInput">initialLoadSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings">DatabaseMigrationMigrationInitialLoadSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.sourceContainerDatabaseConnectionIdInput">sourceContainerDatabaseConnectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.sourceDatabaseConnectionIdInput">sourceDatabaseConnectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.targetDatabaseConnectionIdInput">targetDatabaseConnectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts">DatabaseMigrationMigrationTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.bulkIncludeExcludeData">bulkIncludeExcludeData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.databaseCombination">databaseCombination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.sourceContainerDatabaseConnectionId">sourceContainerDatabaseConnectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.sourceDatabaseConnectionId">sourceDatabaseConnectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.targetDatabaseConnectionId">targetDatabaseConnectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `advancedParameters`<sup>Required</sup> <a name="advancedParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.advancedParameters"></a>

```java
public DatabaseMigrationMigrationAdvancedParametersList getAdvancedParameters();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList">DatabaseMigrationMigrationAdvancedParametersList</a>

---

##### `advisorSettings`<sup>Required</sup> <a name="advisorSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.advisorSettings"></a>

```java
public DatabaseMigrationMigrationAdvisorSettingsOutputReference getAdvisorSettings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference">DatabaseMigrationMigrationAdvisorSettingsOutputReference</a>

---

##### `dataTransferMediumDetails`<sup>Required</sup> <a name="dataTransferMediumDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.dataTransferMediumDetails"></a>

```java
public DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference getDataTransferMediumDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference">DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference</a>

---

##### `excludeObjects`<sup>Required</sup> <a name="excludeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.excludeObjects"></a>

```java
public DatabaseMigrationMigrationExcludeObjectsList getExcludeObjects();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList">DatabaseMigrationMigrationExcludeObjectsList</a>

---

##### `executingJobId`<sup>Required</sup> <a name="executingJobId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.executingJobId"></a>

```java
public java.lang.String getExecutingJobId();
```

- *Type:* java.lang.String

---

##### `ggsDetails`<sup>Required</sup> <a name="ggsDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.ggsDetails"></a>

```java
public DatabaseMigrationMigrationGgsDetailsOutputReference getGgsDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference">DatabaseMigrationMigrationGgsDetailsOutputReference</a>

---

##### `hubDetails`<sup>Required</sup> <a name="hubDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.hubDetails"></a>

```java
public DatabaseMigrationMigrationHubDetailsOutputReference getHubDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference">DatabaseMigrationMigrationHubDetailsOutputReference</a>

---

##### `includeObjects`<sup>Required</sup> <a name="includeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.includeObjects"></a>

```java
public DatabaseMigrationMigrationIncludeObjectsList getIncludeObjects();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList">DatabaseMigrationMigrationIncludeObjectsList</a>

---

##### `initialLoadSettings`<sup>Required</sup> <a name="initialLoadSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.initialLoadSettings"></a>

```java
public DatabaseMigrationMigrationInitialLoadSettingsOutputReference getInitialLoadSettings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference">DatabaseMigrationMigrationInitialLoadSettingsOutputReference</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeLastMigration`<sup>Required</sup> <a name="timeLastMigration" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeLastMigration"></a>

```java
public java.lang.String getTimeLastMigration();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeouts"></a>

```java
public DatabaseMigrationMigrationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference">DatabaseMigrationMigrationTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `waitAfter`<sup>Required</sup> <a name="waitAfter" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.waitAfter"></a>

```java
public java.lang.String getWaitAfter();
```

- *Type:* java.lang.String

---

##### `advancedParametersInput`<sup>Optional</sup> <a name="advancedParametersInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.advancedParametersInput"></a>

```java
public java.lang.Object getAdvancedParametersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters">DatabaseMigrationMigrationAdvancedParameters</a>>

---

##### `advisorSettingsInput`<sup>Optional</sup> <a name="advisorSettingsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.advisorSettingsInput"></a>

```java
public DatabaseMigrationMigrationAdvisorSettings getAdvisorSettingsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings">DatabaseMigrationMigrationAdvisorSettings</a>

---

##### `bulkIncludeExcludeDataInput`<sup>Optional</sup> <a name="bulkIncludeExcludeDataInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.bulkIncludeExcludeDataInput"></a>

```java
public java.lang.String getBulkIncludeExcludeDataInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `databaseCombinationInput`<sup>Optional</sup> <a name="databaseCombinationInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.databaseCombinationInput"></a>

```java
public java.lang.String getDatabaseCombinationInput();
```

- *Type:* java.lang.String

---

##### `dataTransferMediumDetailsInput`<sup>Optional</sup> <a name="dataTransferMediumDetailsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.dataTransferMediumDetailsInput"></a>

```java
public DatabaseMigrationMigrationDataTransferMediumDetails getDataTransferMediumDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails">DatabaseMigrationMigrationDataTransferMediumDetails</a>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `excludeObjectsInput`<sup>Optional</sup> <a name="excludeObjectsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.excludeObjectsInput"></a>

```java
public java.lang.Object getExcludeObjectsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects">DatabaseMigrationMigrationExcludeObjects</a>>

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `ggsDetailsInput`<sup>Optional</sup> <a name="ggsDetailsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.ggsDetailsInput"></a>

```java
public DatabaseMigrationMigrationGgsDetails getGgsDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails">DatabaseMigrationMigrationGgsDetails</a>

---

##### `hubDetailsInput`<sup>Optional</sup> <a name="hubDetailsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.hubDetailsInput"></a>

```java
public DatabaseMigrationMigrationHubDetails getHubDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails">DatabaseMigrationMigrationHubDetails</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `includeObjectsInput`<sup>Optional</sup> <a name="includeObjectsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.includeObjectsInput"></a>

```java
public java.lang.Object getIncludeObjectsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects">DatabaseMigrationMigrationIncludeObjects</a>>

---

##### `initialLoadSettingsInput`<sup>Optional</sup> <a name="initialLoadSettingsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.initialLoadSettingsInput"></a>

```java
public DatabaseMigrationMigrationInitialLoadSettings getInitialLoadSettingsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings">DatabaseMigrationMigrationInitialLoadSettings</a>

---

##### `sourceContainerDatabaseConnectionIdInput`<sup>Optional</sup> <a name="sourceContainerDatabaseConnectionIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.sourceContainerDatabaseConnectionIdInput"></a>

```java
public java.lang.String getSourceContainerDatabaseConnectionIdInput();
```

- *Type:* java.lang.String

---

##### `sourceDatabaseConnectionIdInput`<sup>Optional</sup> <a name="sourceDatabaseConnectionIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.sourceDatabaseConnectionIdInput"></a>

```java
public java.lang.String getSourceDatabaseConnectionIdInput();
```

- *Type:* java.lang.String

---

##### `targetDatabaseConnectionIdInput`<sup>Optional</sup> <a name="targetDatabaseConnectionIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.targetDatabaseConnectionIdInput"></a>

```java
public java.lang.String getTargetDatabaseConnectionIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts">DatabaseMigrationMigrationTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `bulkIncludeExcludeData`<sup>Required</sup> <a name="bulkIncludeExcludeData" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.bulkIncludeExcludeData"></a>

```java
public java.lang.String getBulkIncludeExcludeData();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `databaseCombination`<sup>Required</sup> <a name="databaseCombination" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.databaseCombination"></a>

```java
public java.lang.String getDatabaseCombination();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `sourceContainerDatabaseConnectionId`<sup>Required</sup> <a name="sourceContainerDatabaseConnectionId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.sourceContainerDatabaseConnectionId"></a>

```java
public java.lang.String getSourceContainerDatabaseConnectionId();
```

- *Type:* java.lang.String

---

##### `sourceDatabaseConnectionId`<sup>Required</sup> <a name="sourceDatabaseConnectionId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.sourceDatabaseConnectionId"></a>

```java
public java.lang.String getSourceDatabaseConnectionId();
```

- *Type:* java.lang.String

---

##### `targetDatabaseConnectionId`<sup>Required</sup> <a name="targetDatabaseConnectionId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.targetDatabaseConnectionId"></a>

```java
public java.lang.String getTargetDatabaseConnectionId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseMigrationMigrationAdvancedParameters <a name="DatabaseMigrationMigrationAdvancedParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationAdvancedParameters;

DatabaseMigrationMigrationAdvancedParameters.builder()
//  .dataType(java.lang.String)
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters.property.dataType">dataType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#data_type DatabaseMigrationMigration#data_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#value DatabaseMigrationMigration#value}. |

---

##### `dataType`<sup>Optional</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#data_type DatabaseMigrationMigration#data_type}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#value DatabaseMigrationMigration#value}.

---

### DatabaseMigrationMigrationAdvisorSettings <a name="DatabaseMigrationMigrationAdvisorSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationAdvisorSettings;

DatabaseMigrationMigrationAdvisorSettings.builder()
//  .isIgnoreErrors(java.lang.Boolean)
//  .isIgnoreErrors(IResolvable)
//  .isSkipAdvisor(java.lang.Boolean)
//  .isSkipAdvisor(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings.property.isIgnoreErrors">isIgnoreErrors</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_ignore_errors DatabaseMigrationMigration#is_ignore_errors}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings.property.isSkipAdvisor">isSkipAdvisor</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_skip_advisor DatabaseMigrationMigration#is_skip_advisor}. |

---

##### `isIgnoreErrors`<sup>Optional</sup> <a name="isIgnoreErrors" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings.property.isIgnoreErrors"></a>

```java
public java.lang.Object getIsIgnoreErrors();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_ignore_errors DatabaseMigrationMigration#is_ignore_errors}.

---

##### `isSkipAdvisor`<sup>Optional</sup> <a name="isSkipAdvisor" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings.property.isSkipAdvisor"></a>

```java
public java.lang.Object getIsSkipAdvisor();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_skip_advisor DatabaseMigrationMigration#is_skip_advisor}.

---

### DatabaseMigrationMigrationConfig <a name="DatabaseMigrationMigrationConfig" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationConfig;

DatabaseMigrationMigrationConfig.builder()
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
    .databaseCombination(java.lang.String)
    .sourceDatabaseConnectionId(java.lang.String)
    .targetDatabaseConnectionId(java.lang.String)
    .type(java.lang.String)
//  .advancedParameters(IResolvable)
//  .advancedParameters(java.util.List<DatabaseMigrationMigrationAdvancedParameters>)
//  .advisorSettings(DatabaseMigrationMigrationAdvisorSettings)
//  .bulkIncludeExcludeData(java.lang.String)
//  .dataTransferMediumDetails(DatabaseMigrationMigrationDataTransferMediumDetails)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .excludeObjects(IResolvable)
//  .excludeObjects(java.util.List<DatabaseMigrationMigrationExcludeObjects>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .ggsDetails(DatabaseMigrationMigrationGgsDetails)
//  .hubDetails(DatabaseMigrationMigrationHubDetails)
//  .id(java.lang.String)
//  .includeObjects(IResolvable)
//  .includeObjects(java.util.List<DatabaseMigrationMigrationIncludeObjects>)
//  .initialLoadSettings(DatabaseMigrationMigrationInitialLoadSettings)
//  .sourceContainerDatabaseConnectionId(java.lang.String)
//  .timeouts(DatabaseMigrationMigrationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#compartment_id DatabaseMigrationMigration#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.databaseCombination">databaseCombination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#database_combination DatabaseMigrationMigration#database_combination}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.sourceDatabaseConnectionId">sourceDatabaseConnectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#source_database_connection_id DatabaseMigrationMigration#source_database_connection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.targetDatabaseConnectionId">targetDatabaseConnectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#target_database_connection_id DatabaseMigrationMigration#target_database_connection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.advancedParameters">advancedParameters</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters">DatabaseMigrationMigrationAdvancedParameters</a>></code> | advanced_parameters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.advisorSettings">advisorSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings">DatabaseMigrationMigrationAdvisorSettings</a></code> | advisor_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.bulkIncludeExcludeData">bulkIncludeExcludeData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#bulk_include_exclude_data DatabaseMigrationMigration#bulk_include_exclude_data}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.dataTransferMediumDetails">dataTransferMediumDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails">DatabaseMigrationMigrationDataTransferMediumDetails</a></code> | data_transfer_medium_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#defined_tags DatabaseMigrationMigration#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#description DatabaseMigrationMigration#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#display_name DatabaseMigrationMigration#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.excludeObjects">excludeObjects</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects">DatabaseMigrationMigrationExcludeObjects</a>></code> | exclude_objects block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#freeform_tags DatabaseMigrationMigration#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.ggsDetails">ggsDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails">DatabaseMigrationMigrationGgsDetails</a></code> | ggs_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.hubDetails">hubDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails">DatabaseMigrationMigrationHubDetails</a></code> | hub_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#id DatabaseMigrationMigration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.includeObjects">includeObjects</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects">DatabaseMigrationMigrationIncludeObjects</a>></code> | include_objects block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.initialLoadSettings">initialLoadSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings">DatabaseMigrationMigrationInitialLoadSettings</a></code> | initial_load_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.sourceContainerDatabaseConnectionId">sourceContainerDatabaseConnectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#source_container_database_connection_id DatabaseMigrationMigration#source_container_database_connection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts">DatabaseMigrationMigrationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#compartment_id DatabaseMigrationMigration#compartment_id}.

---

##### `databaseCombination`<sup>Required</sup> <a name="databaseCombination" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.databaseCombination"></a>

```java
public java.lang.String getDatabaseCombination();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#database_combination DatabaseMigrationMigration#database_combination}.

---

##### `sourceDatabaseConnectionId`<sup>Required</sup> <a name="sourceDatabaseConnectionId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.sourceDatabaseConnectionId"></a>

```java
public java.lang.String getSourceDatabaseConnectionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#source_database_connection_id DatabaseMigrationMigration#source_database_connection_id}.

---

##### `targetDatabaseConnectionId`<sup>Required</sup> <a name="targetDatabaseConnectionId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.targetDatabaseConnectionId"></a>

```java
public java.lang.String getTargetDatabaseConnectionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#target_database_connection_id DatabaseMigrationMigration#target_database_connection_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}.

---

##### `advancedParameters`<sup>Optional</sup> <a name="advancedParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.advancedParameters"></a>

```java
public java.lang.Object getAdvancedParameters();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters">DatabaseMigrationMigrationAdvancedParameters</a>>

advanced_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#advanced_parameters DatabaseMigrationMigration#advanced_parameters}

---

##### `advisorSettings`<sup>Optional</sup> <a name="advisorSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.advisorSettings"></a>

```java
public DatabaseMigrationMigrationAdvisorSettings getAdvisorSettings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings">DatabaseMigrationMigrationAdvisorSettings</a>

advisor_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#advisor_settings DatabaseMigrationMigration#advisor_settings}

---

##### `bulkIncludeExcludeData`<sup>Optional</sup> <a name="bulkIncludeExcludeData" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.bulkIncludeExcludeData"></a>

```java
public java.lang.String getBulkIncludeExcludeData();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#bulk_include_exclude_data DatabaseMigrationMigration#bulk_include_exclude_data}.

---

##### `dataTransferMediumDetails`<sup>Optional</sup> <a name="dataTransferMediumDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.dataTransferMediumDetails"></a>

```java
public DatabaseMigrationMigrationDataTransferMediumDetails getDataTransferMediumDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails">DatabaseMigrationMigrationDataTransferMediumDetails</a>

data_transfer_medium_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#data_transfer_medium_details DatabaseMigrationMigration#data_transfer_medium_details}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#defined_tags DatabaseMigrationMigration#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#description DatabaseMigrationMigration#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#display_name DatabaseMigrationMigration#display_name}.

---

##### `excludeObjects`<sup>Optional</sup> <a name="excludeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.excludeObjects"></a>

```java
public java.lang.Object getExcludeObjects();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects">DatabaseMigrationMigrationExcludeObjects</a>>

exclude_objects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#exclude_objects DatabaseMigrationMigration#exclude_objects}

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#freeform_tags DatabaseMigrationMigration#freeform_tags}.

---

##### `ggsDetails`<sup>Optional</sup> <a name="ggsDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.ggsDetails"></a>

```java
public DatabaseMigrationMigrationGgsDetails getGgsDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails">DatabaseMigrationMigrationGgsDetails</a>

ggs_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#ggs_details DatabaseMigrationMigration#ggs_details}

---

##### `hubDetails`<sup>Optional</sup> <a name="hubDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.hubDetails"></a>

```java
public DatabaseMigrationMigrationHubDetails getHubDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails">DatabaseMigrationMigrationHubDetails</a>

hub_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#hub_details DatabaseMigrationMigration#hub_details}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#id DatabaseMigrationMigration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeObjects`<sup>Optional</sup> <a name="includeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.includeObjects"></a>

```java
public java.lang.Object getIncludeObjects();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects">DatabaseMigrationMigrationIncludeObjects</a>>

include_objects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#include_objects DatabaseMigrationMigration#include_objects}

---

##### `initialLoadSettings`<sup>Optional</sup> <a name="initialLoadSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.initialLoadSettings"></a>

```java
public DatabaseMigrationMigrationInitialLoadSettings getInitialLoadSettings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings">DatabaseMigrationMigrationInitialLoadSettings</a>

initial_load_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#initial_load_settings DatabaseMigrationMigration#initial_load_settings}

---

##### `sourceContainerDatabaseConnectionId`<sup>Optional</sup> <a name="sourceContainerDatabaseConnectionId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.sourceContainerDatabaseConnectionId"></a>

```java
public java.lang.String getSourceContainerDatabaseConnectionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#source_container_database_connection_id DatabaseMigrationMigration#source_container_database_connection_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.timeouts"></a>

```java
public DatabaseMigrationMigrationTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts">DatabaseMigrationMigrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#timeouts DatabaseMigrationMigration#timeouts}

---

### DatabaseMigrationMigrationDataTransferMediumDetails <a name="DatabaseMigrationMigrationDataTransferMediumDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationDataTransferMediumDetails;

DatabaseMigrationMigrationDataTransferMediumDetails.builder()
    .type(java.lang.String)
//  .accessKeyId(java.lang.String)
//  .name(java.lang.String)
//  .objectStorageBucket(DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket)
//  .region(java.lang.String)
//  .secretAccessKey(java.lang.String)
//  .sharedStorageMountTargetId(java.lang.String)
//  .source(DatabaseMigrationMigrationDataTransferMediumDetailsSource)
//  .target(DatabaseMigrationMigrationDataTransferMediumDetailsTarget)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.accessKeyId">accessKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#access_key_id DatabaseMigrationMigration#access_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.objectStorageBucket">objectStorageBucket</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket</a></code> | object_storage_bucket block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#region DatabaseMigrationMigration#region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.secretAccessKey">secretAccessKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#secret_access_key DatabaseMigrationMigration#secret_access_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.sharedStorageMountTargetId">sharedStorageMountTargetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#shared_storage_mount_target_id DatabaseMigrationMigration#shared_storage_mount_target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource">DatabaseMigrationMigrationDataTransferMediumDetailsSource</a></code> | source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.target">target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget">DatabaseMigrationMigrationDataTransferMediumDetailsTarget</a></code> | target block. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}.

---

##### `accessKeyId`<sup>Optional</sup> <a name="accessKeyId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.accessKeyId"></a>

```java
public java.lang.String getAccessKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#access_key_id DatabaseMigrationMigration#access_key_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}.

---

##### `objectStorageBucket`<sup>Optional</sup> <a name="objectStorageBucket" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.objectStorageBucket"></a>

```java
public DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket getObjectStorageBucket();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket</a>

object_storage_bucket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#object_storage_bucket DatabaseMigrationMigration#object_storage_bucket}

---

##### `region`<sup>Optional</sup> <a name="region" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#region DatabaseMigrationMigration#region}.

---

##### `secretAccessKey`<sup>Optional</sup> <a name="secretAccessKey" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.secretAccessKey"></a>

```java
public java.lang.String getSecretAccessKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#secret_access_key DatabaseMigrationMigration#secret_access_key}.

---

##### `sharedStorageMountTargetId`<sup>Optional</sup> <a name="sharedStorageMountTargetId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.sharedStorageMountTargetId"></a>

```java
public java.lang.String getSharedStorageMountTargetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#shared_storage_mount_target_id DatabaseMigrationMigration#shared_storage_mount_target_id}.

---

##### `source`<sup>Optional</sup> <a name="source" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.source"></a>

```java
public DatabaseMigrationMigrationDataTransferMediumDetailsSource getSource();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource">DatabaseMigrationMigrationDataTransferMediumDetailsSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#source DatabaseMigrationMigration#source}

---

##### `target`<sup>Optional</sup> <a name="target" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.target"></a>

```java
public DatabaseMigrationMigrationDataTransferMediumDetailsTarget getTarget();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget">DatabaseMigrationMigrationDataTransferMediumDetailsTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#target DatabaseMigrationMigration#target}

---

### DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket <a name="DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket;

DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket.builder()
//  .bucket(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#bucket DatabaseMigrationMigration#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#namespace DatabaseMigrationMigration#namespace}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#bucket DatabaseMigrationMigration#bucket}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#namespace DatabaseMigrationMigration#namespace}.

---

### DatabaseMigrationMigrationDataTransferMediumDetailsSource <a name="DatabaseMigrationMigrationDataTransferMediumDetailsSource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationDataTransferMediumDetailsSource;

DatabaseMigrationMigrationDataTransferMediumDetailsSource.builder()
    .kind(java.lang.String)
//  .ociHome(java.lang.String)
//  .walletLocation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource.property.kind">kind</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#kind DatabaseMigrationMigration#kind}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource.property.ociHome">ociHome</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#oci_home DatabaseMigrationMigration#oci_home}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource.property.walletLocation">walletLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#wallet_location DatabaseMigrationMigration#wallet_location}. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#kind DatabaseMigrationMigration#kind}.

---

##### `ociHome`<sup>Optional</sup> <a name="ociHome" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource.property.ociHome"></a>

```java
public java.lang.String getOciHome();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#oci_home DatabaseMigrationMigration#oci_home}.

---

##### `walletLocation`<sup>Optional</sup> <a name="walletLocation" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource.property.walletLocation"></a>

```java
public java.lang.String getWalletLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#wallet_location DatabaseMigrationMigration#wallet_location}.

---

### DatabaseMigrationMigrationDataTransferMediumDetailsTarget <a name="DatabaseMigrationMigrationDataTransferMediumDetailsTarget" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget;

DatabaseMigrationMigrationDataTransferMediumDetailsTarget.builder()
    .kind(java.lang.String)
//  .ociHome(java.lang.String)
//  .walletLocation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget.property.kind">kind</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#kind DatabaseMigrationMigration#kind}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget.property.ociHome">ociHome</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#oci_home DatabaseMigrationMigration#oci_home}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget.property.walletLocation">walletLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#wallet_location DatabaseMigrationMigration#wallet_location}. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#kind DatabaseMigrationMigration#kind}.

---

##### `ociHome`<sup>Optional</sup> <a name="ociHome" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget.property.ociHome"></a>

```java
public java.lang.String getOciHome();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#oci_home DatabaseMigrationMigration#oci_home}.

---

##### `walletLocation`<sup>Optional</sup> <a name="walletLocation" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget.property.walletLocation"></a>

```java
public java.lang.String getWalletLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#wallet_location DatabaseMigrationMigration#wallet_location}.

---

### DatabaseMigrationMigrationExcludeObjects <a name="DatabaseMigrationMigrationExcludeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationExcludeObjects;

DatabaseMigrationMigrationExcludeObjects.builder()
    .object(java.lang.String)
//  .isOmitExcludedTableFromReplication(java.lang.Boolean)
//  .isOmitExcludedTableFromReplication(IResolvable)
//  .owner(java.lang.String)
//  .schema(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.object">object</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#object DatabaseMigrationMigration#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.isOmitExcludedTableFromReplication">isOmitExcludedTableFromReplication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_omit_excluded_table_from_replication DatabaseMigrationMigration#is_omit_excluded_table_from_replication}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.owner">owner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#owner DatabaseMigrationMigration#owner}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.schema">schema</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#schema DatabaseMigrationMigration#schema}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}. |

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#object DatabaseMigrationMigration#object}.

---

##### `isOmitExcludedTableFromReplication`<sup>Optional</sup> <a name="isOmitExcludedTableFromReplication" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.isOmitExcludedTableFromReplication"></a>

```java
public java.lang.Object getIsOmitExcludedTableFromReplication();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_omit_excluded_table_from_replication DatabaseMigrationMigration#is_omit_excluded_table_from_replication}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#owner DatabaseMigrationMigration#owner}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#schema DatabaseMigrationMigration#schema}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}.

---

### DatabaseMigrationMigrationGgsDetails <a name="DatabaseMigrationMigrationGgsDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationGgsDetails;

DatabaseMigrationMigrationGgsDetails.builder()
//  .acceptableLag(java.lang.Number)
//  .extract(DatabaseMigrationMigrationGgsDetailsExtract)
//  .replicat(DatabaseMigrationMigrationGgsDetailsReplicat)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails.property.acceptableLag">acceptableLag</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#acceptable_lag DatabaseMigrationMigration#acceptable_lag}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails.property.extract">extract</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract">DatabaseMigrationMigrationGgsDetailsExtract</a></code> | extract block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails.property.replicat">replicat</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat">DatabaseMigrationMigrationGgsDetailsReplicat</a></code> | replicat block. |

---

##### `acceptableLag`<sup>Optional</sup> <a name="acceptableLag" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails.property.acceptableLag"></a>

```java
public java.lang.Number getAcceptableLag();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#acceptable_lag DatabaseMigrationMigration#acceptable_lag}.

---

##### `extract`<sup>Optional</sup> <a name="extract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails.property.extract"></a>

```java
public DatabaseMigrationMigrationGgsDetailsExtract getExtract();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract">DatabaseMigrationMigrationGgsDetailsExtract</a>

extract block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#extract DatabaseMigrationMigration#extract}

---

##### `replicat`<sup>Optional</sup> <a name="replicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails.property.replicat"></a>

```java
public DatabaseMigrationMigrationGgsDetailsReplicat getReplicat();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat">DatabaseMigrationMigrationGgsDetailsReplicat</a>

replicat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#replicat DatabaseMigrationMigration#replicat}

---

### DatabaseMigrationMigrationGgsDetailsExtract <a name="DatabaseMigrationMigrationGgsDetailsExtract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationGgsDetailsExtract;

DatabaseMigrationMigrationGgsDetailsExtract.builder()
//  .longTransDuration(java.lang.Number)
//  .performanceProfile(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract.property.longTransDuration">longTransDuration</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#long_trans_duration DatabaseMigrationMigration#long_trans_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract.property.performanceProfile">performanceProfile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}. |

---

##### `longTransDuration`<sup>Optional</sup> <a name="longTransDuration" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract.property.longTransDuration"></a>

```java
public java.lang.Number getLongTransDuration();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#long_trans_duration DatabaseMigrationMigration#long_trans_duration}.

---

##### `performanceProfile`<sup>Optional</sup> <a name="performanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract.property.performanceProfile"></a>

```java
public java.lang.String getPerformanceProfile();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}.

---

### DatabaseMigrationMigrationGgsDetailsGgsDeployment <a name="DatabaseMigrationMigrationGgsDetailsGgsDeployment" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeployment"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeployment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationGgsDetailsGgsDeployment;

DatabaseMigrationMigrationGgsDetailsGgsDeployment.builder()
    .build();
```


### DatabaseMigrationMigrationGgsDetailsReplicat <a name="DatabaseMigrationMigrationGgsDetailsReplicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationGgsDetailsReplicat;

DatabaseMigrationMigrationGgsDetailsReplicat.builder()
//  .performanceProfile(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat.property.performanceProfile">performanceProfile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}. |

---

##### `performanceProfile`<sup>Optional</sup> <a name="performanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat.property.performanceProfile"></a>

```java
public java.lang.String getPerformanceProfile();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}.

---

### DatabaseMigrationMigrationHubDetails <a name="DatabaseMigrationMigrationHubDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationHubDetails;

DatabaseMigrationMigrationHubDetails.builder()
    .keyId(java.lang.String)
    .restAdminCredentials(DatabaseMigrationMigrationHubDetailsRestAdminCredentials)
    .url(java.lang.String)
    .vaultId(java.lang.String)
//  .acceptableLag(java.lang.Number)
//  .computeId(java.lang.String)
//  .extract(DatabaseMigrationMigrationHubDetailsExtract)
//  .replicat(DatabaseMigrationMigrationHubDetailsReplicat)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.keyId">keyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#key_id DatabaseMigrationMigration#key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.restAdminCredentials">restAdminCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials">DatabaseMigrationMigrationHubDetailsRestAdminCredentials</a></code> | rest_admin_credentials block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#url DatabaseMigrationMigration#url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.vaultId">vaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#vault_id DatabaseMigrationMigration#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.acceptableLag">acceptableLag</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#acceptable_lag DatabaseMigrationMigration#acceptable_lag}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.computeId">computeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#compute_id DatabaseMigrationMigration#compute_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.extract">extract</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract">DatabaseMigrationMigrationHubDetailsExtract</a></code> | extract block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.replicat">replicat</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat">DatabaseMigrationMigrationHubDetailsReplicat</a></code> | replicat block. |

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#key_id DatabaseMigrationMigration#key_id}.

---

##### `restAdminCredentials`<sup>Required</sup> <a name="restAdminCredentials" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.restAdminCredentials"></a>

```java
public DatabaseMigrationMigrationHubDetailsRestAdminCredentials getRestAdminCredentials();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials">DatabaseMigrationMigrationHubDetailsRestAdminCredentials</a>

rest_admin_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#rest_admin_credentials DatabaseMigrationMigration#rest_admin_credentials}

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#url DatabaseMigrationMigration#url}.

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.vaultId"></a>

```java
public java.lang.String getVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#vault_id DatabaseMigrationMigration#vault_id}.

---

##### `acceptableLag`<sup>Optional</sup> <a name="acceptableLag" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.acceptableLag"></a>

```java
public java.lang.Number getAcceptableLag();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#acceptable_lag DatabaseMigrationMigration#acceptable_lag}.

---

##### `computeId`<sup>Optional</sup> <a name="computeId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.computeId"></a>

```java
public java.lang.String getComputeId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#compute_id DatabaseMigrationMigration#compute_id}.

---

##### `extract`<sup>Optional</sup> <a name="extract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.extract"></a>

```java
public DatabaseMigrationMigrationHubDetailsExtract getExtract();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract">DatabaseMigrationMigrationHubDetailsExtract</a>

extract block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#extract DatabaseMigrationMigration#extract}

---

##### `replicat`<sup>Optional</sup> <a name="replicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.replicat"></a>

```java
public DatabaseMigrationMigrationHubDetailsReplicat getReplicat();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat">DatabaseMigrationMigrationHubDetailsReplicat</a>

replicat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#replicat DatabaseMigrationMigration#replicat}

---

### DatabaseMigrationMigrationHubDetailsExtract <a name="DatabaseMigrationMigrationHubDetailsExtract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationHubDetailsExtract;

DatabaseMigrationMigrationHubDetailsExtract.builder()
//  .longTransDuration(java.lang.Number)
//  .performanceProfile(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract.property.longTransDuration">longTransDuration</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#long_trans_duration DatabaseMigrationMigration#long_trans_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract.property.performanceProfile">performanceProfile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}. |

---

##### `longTransDuration`<sup>Optional</sup> <a name="longTransDuration" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract.property.longTransDuration"></a>

```java
public java.lang.Number getLongTransDuration();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#long_trans_duration DatabaseMigrationMigration#long_trans_duration}.

---

##### `performanceProfile`<sup>Optional</sup> <a name="performanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract.property.performanceProfile"></a>

```java
public java.lang.String getPerformanceProfile();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}.

---

### DatabaseMigrationMigrationHubDetailsReplicat <a name="DatabaseMigrationMigrationHubDetailsReplicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationHubDetailsReplicat;

DatabaseMigrationMigrationHubDetailsReplicat.builder()
//  .performanceProfile(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat.property.performanceProfile">performanceProfile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}. |

---

##### `performanceProfile`<sup>Optional</sup> <a name="performanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat.property.performanceProfile"></a>

```java
public java.lang.String getPerformanceProfile();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}.

---

### DatabaseMigrationMigrationHubDetailsRestAdminCredentials <a name="DatabaseMigrationMigrationHubDetailsRestAdminCredentials" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials;

DatabaseMigrationMigrationHubDetailsRestAdminCredentials.builder()
    .password(java.lang.String)
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#password DatabaseMigrationMigration#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#username DatabaseMigrationMigration#username}. |

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#password DatabaseMigrationMigration#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#username DatabaseMigrationMigration#username}.

---

### DatabaseMigrationMigrationIncludeObjects <a name="DatabaseMigrationMigrationIncludeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationIncludeObjects;

DatabaseMigrationMigrationIncludeObjects.builder()
    .object(java.lang.String)
//  .isOmitExcludedTableFromReplication(java.lang.Boolean)
//  .isOmitExcludedTableFromReplication(IResolvable)
//  .owner(java.lang.String)
//  .schema(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.object">object</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#object DatabaseMigrationMigration#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.isOmitExcludedTableFromReplication">isOmitExcludedTableFromReplication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_omit_excluded_table_from_replication DatabaseMigrationMigration#is_omit_excluded_table_from_replication}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.owner">owner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#owner DatabaseMigrationMigration#owner}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.schema">schema</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#schema DatabaseMigrationMigration#schema}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}. |

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#object DatabaseMigrationMigration#object}.

---

##### `isOmitExcludedTableFromReplication`<sup>Optional</sup> <a name="isOmitExcludedTableFromReplication" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.isOmitExcludedTableFromReplication"></a>

```java
public java.lang.Object getIsOmitExcludedTableFromReplication();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_omit_excluded_table_from_replication DatabaseMigrationMigration#is_omit_excluded_table_from_replication}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#owner DatabaseMigrationMigration#owner}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#schema DatabaseMigrationMigration#schema}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}.

---

### DatabaseMigrationMigrationInitialLoadSettings <a name="DatabaseMigrationMigrationInitialLoadSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationInitialLoadSettings;

DatabaseMigrationMigrationInitialLoadSettings.builder()
    .jobMode(java.lang.String)
//  .compatibility(java.util.List<java.lang.String>)
//  .dataPumpParameters(DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters)
//  .exportDirectoryObject(DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject)
//  .handleGrantErrors(java.lang.String)
//  .importDirectoryObject(DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject)
//  .isConsistent(java.lang.Boolean)
//  .isConsistent(IResolvable)
//  .isIgnoreExistingObjects(java.lang.Boolean)
//  .isIgnoreExistingObjects(IResolvable)
//  .isTzUtc(java.lang.Boolean)
//  .isTzUtc(IResolvable)
//  .metadataRemaps(IResolvable)
//  .metadataRemaps(java.util.List<DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps>)
//  .primaryKeyCompatibility(java.lang.String)
//  .tablespaceDetails(DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.jobMode">jobMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#job_mode DatabaseMigrationMigration#job_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.compatibility">compatibility</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#compatibility DatabaseMigrationMigration#compatibility}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.dataPumpParameters">dataPumpParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters</a></code> | data_pump_parameters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.exportDirectoryObject">exportDirectoryObject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject</a></code> | export_directory_object block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.handleGrantErrors">handleGrantErrors</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#handle_grant_errors DatabaseMigrationMigration#handle_grant_errors}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.importDirectoryObject">importDirectoryObject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject</a></code> | import_directory_object block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.isConsistent">isConsistent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_consistent DatabaseMigrationMigration#is_consistent}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.isIgnoreExistingObjects">isIgnoreExistingObjects</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_ignore_existing_objects DatabaseMigrationMigration#is_ignore_existing_objects}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.isTzUtc">isTzUtc</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_tz_utc DatabaseMigrationMigration#is_tz_utc}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.metadataRemaps">metadataRemaps</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps">DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps</a>></code> | metadata_remaps block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.primaryKeyCompatibility">primaryKeyCompatibility</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#primary_key_compatibility DatabaseMigrationMigration#primary_key_compatibility}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.tablespaceDetails">tablespaceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails</a></code> | tablespace_details block. |

---

##### `jobMode`<sup>Required</sup> <a name="jobMode" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.jobMode"></a>

```java
public java.lang.String getJobMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#job_mode DatabaseMigrationMigration#job_mode}.

---

##### `compatibility`<sup>Optional</sup> <a name="compatibility" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.compatibility"></a>

```java
public java.util.List<java.lang.String> getCompatibility();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#compatibility DatabaseMigrationMigration#compatibility}.

---

##### `dataPumpParameters`<sup>Optional</sup> <a name="dataPumpParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.dataPumpParameters"></a>

```java
public DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters getDataPumpParameters();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters</a>

data_pump_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#data_pump_parameters DatabaseMigrationMigration#data_pump_parameters}

---

##### `exportDirectoryObject`<sup>Optional</sup> <a name="exportDirectoryObject" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.exportDirectoryObject"></a>

```java
public DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject getExportDirectoryObject();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject</a>

export_directory_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#export_directory_object DatabaseMigrationMigration#export_directory_object}

---

##### `handleGrantErrors`<sup>Optional</sup> <a name="handleGrantErrors" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.handleGrantErrors"></a>

```java
public java.lang.String getHandleGrantErrors();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#handle_grant_errors DatabaseMigrationMigration#handle_grant_errors}.

---

##### `importDirectoryObject`<sup>Optional</sup> <a name="importDirectoryObject" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.importDirectoryObject"></a>

```java
public DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject getImportDirectoryObject();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject</a>

import_directory_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#import_directory_object DatabaseMigrationMigration#import_directory_object}

---

##### `isConsistent`<sup>Optional</sup> <a name="isConsistent" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.isConsistent"></a>

```java
public java.lang.Object getIsConsistent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_consistent DatabaseMigrationMigration#is_consistent}.

---

##### `isIgnoreExistingObjects`<sup>Optional</sup> <a name="isIgnoreExistingObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.isIgnoreExistingObjects"></a>

```java
public java.lang.Object getIsIgnoreExistingObjects();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_ignore_existing_objects DatabaseMigrationMigration#is_ignore_existing_objects}.

---

##### `isTzUtc`<sup>Optional</sup> <a name="isTzUtc" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.isTzUtc"></a>

```java
public java.lang.Object getIsTzUtc();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_tz_utc DatabaseMigrationMigration#is_tz_utc}.

---

##### `metadataRemaps`<sup>Optional</sup> <a name="metadataRemaps" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.metadataRemaps"></a>

```java
public java.lang.Object getMetadataRemaps();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps">DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps</a>>

metadata_remaps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#metadata_remaps DatabaseMigrationMigration#metadata_remaps}

---

##### `primaryKeyCompatibility`<sup>Optional</sup> <a name="primaryKeyCompatibility" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.primaryKeyCompatibility"></a>

```java
public java.lang.String getPrimaryKeyCompatibility();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#primary_key_compatibility DatabaseMigrationMigration#primary_key_compatibility}.

---

##### `tablespaceDetails`<sup>Optional</sup> <a name="tablespaceDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.tablespaceDetails"></a>

```java
public DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails getTablespaceDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails</a>

tablespace_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#tablespace_details DatabaseMigrationMigration#tablespace_details}

---

### DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters <a name="DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters;

DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.builder()
//  .estimate(java.lang.String)
//  .excludeParameters(java.util.List<java.lang.String>)
//  .exportParallelismDegree(java.lang.Number)
//  .importParallelismDegree(java.lang.Number)
//  .isCluster(java.lang.Boolean)
//  .isCluster(IResolvable)
//  .tableExistsAction(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.estimate">estimate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#estimate DatabaseMigrationMigration#estimate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.excludeParameters">excludeParameters</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#exclude_parameters DatabaseMigrationMigration#exclude_parameters}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.exportParallelismDegree">exportParallelismDegree</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#export_parallelism_degree DatabaseMigrationMigration#export_parallelism_degree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.importParallelismDegree">importParallelismDegree</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#import_parallelism_degree DatabaseMigrationMigration#import_parallelism_degree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.isCluster">isCluster</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_cluster DatabaseMigrationMigration#is_cluster}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.tableExistsAction">tableExistsAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#table_exists_action DatabaseMigrationMigration#table_exists_action}. |

---

##### `estimate`<sup>Optional</sup> <a name="estimate" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.estimate"></a>

```java
public java.lang.String getEstimate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#estimate DatabaseMigrationMigration#estimate}.

---

##### `excludeParameters`<sup>Optional</sup> <a name="excludeParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.excludeParameters"></a>

```java
public java.util.List<java.lang.String> getExcludeParameters();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#exclude_parameters DatabaseMigrationMigration#exclude_parameters}.

---

##### `exportParallelismDegree`<sup>Optional</sup> <a name="exportParallelismDegree" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.exportParallelismDegree"></a>

```java
public java.lang.Number getExportParallelismDegree();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#export_parallelism_degree DatabaseMigrationMigration#export_parallelism_degree}.

---

##### `importParallelismDegree`<sup>Optional</sup> <a name="importParallelismDegree" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.importParallelismDegree"></a>

```java
public java.lang.Number getImportParallelismDegree();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#import_parallelism_degree DatabaseMigrationMigration#import_parallelism_degree}.

---

##### `isCluster`<sup>Optional</sup> <a name="isCluster" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.isCluster"></a>

```java
public java.lang.Object getIsCluster();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_cluster DatabaseMigrationMigration#is_cluster}.

---

##### `tableExistsAction`<sup>Optional</sup> <a name="tableExistsAction" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.tableExistsAction"></a>

```java
public java.lang.String getTableExistsAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#table_exists_action DatabaseMigrationMigration#table_exists_action}.

---

### DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject <a name="DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject;

DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject.builder()
//  .name(java.lang.String)
//  .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#path DatabaseMigrationMigration#path}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}.

---

##### `path`<sup>Optional</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#path DatabaseMigrationMigration#path}.

---

### DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject <a name="DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject;

DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject.builder()
//  .name(java.lang.String)
//  .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#path DatabaseMigrationMigration#path}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}.

---

##### `path`<sup>Optional</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#path DatabaseMigrationMigration#path}.

---

### DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps <a name="DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps;

DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps.builder()
//  .newValue(java.lang.String)
//  .oldValue(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps.property.newValue">newValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#new_value DatabaseMigrationMigration#new_value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps.property.oldValue">oldValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#old_value DatabaseMigrationMigration#old_value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}. |

---

##### `newValue`<sup>Optional</sup> <a name="newValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps.property.newValue"></a>

```java
public java.lang.String getNewValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#new_value DatabaseMigrationMigration#new_value}.

---

##### `oldValue`<sup>Optional</sup> <a name="oldValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps.property.oldValue"></a>

```java
public java.lang.String getOldValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#old_value DatabaseMigrationMigration#old_value}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}.

---

### DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails <a name="DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails;

DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.builder()
    .targetType(java.lang.String)
//  .blockSizeInKbs(java.lang.String)
//  .extendSizeInMbs(java.lang.Number)
//  .isAutoCreate(java.lang.Boolean)
//  .isAutoCreate(IResolvable)
//  .isBigFile(java.lang.Boolean)
//  .isBigFile(IResolvable)
//  .remapTarget(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.targetType">targetType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#target_type DatabaseMigrationMigration#target_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.blockSizeInKbs">blockSizeInKbs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#block_size_in_kbs DatabaseMigrationMigration#block_size_in_kbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.extendSizeInMbs">extendSizeInMbs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#extend_size_in_mbs DatabaseMigrationMigration#extend_size_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.isAutoCreate">isAutoCreate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_auto_create DatabaseMigrationMigration#is_auto_create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.isBigFile">isBigFile</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_big_file DatabaseMigrationMigration#is_big_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.remapTarget">remapTarget</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#remap_target DatabaseMigrationMigration#remap_target}. |

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.targetType"></a>

```java
public java.lang.String getTargetType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#target_type DatabaseMigrationMigration#target_type}.

---

##### `blockSizeInKbs`<sup>Optional</sup> <a name="blockSizeInKbs" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.blockSizeInKbs"></a>

```java
public java.lang.String getBlockSizeInKbs();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#block_size_in_kbs DatabaseMigrationMigration#block_size_in_kbs}.

---

##### `extendSizeInMbs`<sup>Optional</sup> <a name="extendSizeInMbs" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.extendSizeInMbs"></a>

```java
public java.lang.Number getExtendSizeInMbs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#extend_size_in_mbs DatabaseMigrationMigration#extend_size_in_mbs}.

---

##### `isAutoCreate`<sup>Optional</sup> <a name="isAutoCreate" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.isAutoCreate"></a>

```java
public java.lang.Object getIsAutoCreate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_auto_create DatabaseMigrationMigration#is_auto_create}.

---

##### `isBigFile`<sup>Optional</sup> <a name="isBigFile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.isBigFile"></a>

```java
public java.lang.Object getIsBigFile();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_big_file DatabaseMigrationMigration#is_big_file}.

---

##### `remapTarget`<sup>Optional</sup> <a name="remapTarget" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.remapTarget"></a>

```java
public java.lang.String getRemapTarget();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#remap_target DatabaseMigrationMigration#remap_target}.

---

### DatabaseMigrationMigrationTimeouts <a name="DatabaseMigrationMigrationTimeouts" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationTimeouts;

DatabaseMigrationMigrationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#create DatabaseMigrationMigration#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#delete DatabaseMigrationMigration#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#update DatabaseMigrationMigration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#create DatabaseMigrationMigration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#delete DatabaseMigrationMigration#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#update DatabaseMigrationMigration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseMigrationMigrationAdvancedParametersList <a name="DatabaseMigrationMigrationAdvancedParametersList" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationAdvancedParametersList;

new DatabaseMigrationMigrationAdvancedParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.get"></a>

```java
public DatabaseMigrationMigrationAdvancedParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters">DatabaseMigrationMigrationAdvancedParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters">DatabaseMigrationMigrationAdvancedParameters</a>>

---


### DatabaseMigrationMigrationAdvancedParametersOutputReference <a name="DatabaseMigrationMigrationAdvancedParametersOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationAdvancedParametersOutputReference;

new DatabaseMigrationMigrationAdvancedParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resetDataType">resetDataType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataType` <a name="resetDataType" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resetDataType"></a>

```java
public void resetDataType()
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.dataTypeInput">dataTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.dataType">dataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters">DatabaseMigrationMigrationAdvancedParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataTypeInput`<sup>Optional</sup> <a name="dataTypeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.dataTypeInput"></a>

```java
public java.lang.String getDataTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters">DatabaseMigrationMigrationAdvancedParameters</a>

---


### DatabaseMigrationMigrationAdvisorSettingsOutputReference <a name="DatabaseMigrationMigrationAdvisorSettingsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationAdvisorSettingsOutputReference;

new DatabaseMigrationMigrationAdvisorSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.resetIsIgnoreErrors">resetIsIgnoreErrors</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.resetIsSkipAdvisor">resetIsSkipAdvisor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsIgnoreErrors` <a name="resetIsIgnoreErrors" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.resetIsIgnoreErrors"></a>

```java
public void resetIsIgnoreErrors()
```

##### `resetIsSkipAdvisor` <a name="resetIsSkipAdvisor" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.resetIsSkipAdvisor"></a>

```java
public void resetIsSkipAdvisor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isIgnoreErrorsInput">isIgnoreErrorsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isSkipAdvisorInput">isSkipAdvisorInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isIgnoreErrors">isIgnoreErrors</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isSkipAdvisor">isSkipAdvisor</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings">DatabaseMigrationMigrationAdvisorSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isIgnoreErrorsInput`<sup>Optional</sup> <a name="isIgnoreErrorsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isIgnoreErrorsInput"></a>

```java
public java.lang.Object getIsIgnoreErrorsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isSkipAdvisorInput`<sup>Optional</sup> <a name="isSkipAdvisorInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isSkipAdvisorInput"></a>

```java
public java.lang.Object getIsSkipAdvisorInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isIgnoreErrors`<sup>Required</sup> <a name="isIgnoreErrors" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isIgnoreErrors"></a>

```java
public java.lang.Object getIsIgnoreErrors();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isSkipAdvisor`<sup>Required</sup> <a name="isSkipAdvisor" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isSkipAdvisor"></a>

```java
public java.lang.Object getIsSkipAdvisor();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.internalValue"></a>

```java
public DatabaseMigrationMigrationAdvisorSettings getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings">DatabaseMigrationMigrationAdvisorSettings</a>

---


### DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference <a name="DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference;

new DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetNamespace` <a name="resetNamespace" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.internalValue"></a>

```java
public DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket</a>

---


### DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference <a name="DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference;

new DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putObjectStorageBucket">putObjectStorageBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putSource">putSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetAccessKeyId">resetAccessKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetObjectStorageBucket">resetObjectStorageBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetSecretAccessKey">resetSecretAccessKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetSharedStorageMountTargetId">resetSharedStorageMountTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putObjectStorageBucket` <a name="putObjectStorageBucket" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putObjectStorageBucket"></a>

```java
public void putObjectStorageBucket(DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putObjectStorageBucket.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket</a>

---

##### `putSource` <a name="putSource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putSource"></a>

```java
public void putSource(DatabaseMigrationMigrationDataTransferMediumDetailsSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource">DatabaseMigrationMigrationDataTransferMediumDetailsSource</a>

---

##### `putTarget` <a name="putTarget" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putTarget"></a>

```java
public void putTarget(DatabaseMigrationMigrationDataTransferMediumDetailsTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget">DatabaseMigrationMigrationDataTransferMediumDetailsTarget</a>

---

##### `resetAccessKeyId` <a name="resetAccessKeyId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetAccessKeyId"></a>

```java
public void resetAccessKeyId()
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetObjectStorageBucket` <a name="resetObjectStorageBucket" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetObjectStorageBucket"></a>

```java
public void resetObjectStorageBucket()
```

##### `resetRegion` <a name="resetRegion" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSecretAccessKey` <a name="resetSecretAccessKey" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetSecretAccessKey"></a>

```java
public void resetSecretAccessKey()
```

##### `resetSharedStorageMountTargetId` <a name="resetSharedStorageMountTargetId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetSharedStorageMountTargetId"></a>

```java
public void resetSharedStorageMountTargetId()
```

##### `resetSource` <a name="resetSource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetSource"></a>

```java
public void resetSource()
```

##### `resetTarget` <a name="resetTarget" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetTarget"></a>

```java
public void resetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.objectStorageBucket">objectStorageBucket</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference">DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.target">target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference">DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.accessKeyIdInput">accessKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.objectStorageBucketInput">objectStorageBucketInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.secretAccessKeyInput">secretAccessKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.sharedStorageMountTargetIdInput">sharedStorageMountTargetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.sourceInput">sourceInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource">DatabaseMigrationMigrationDataTransferMediumDetailsSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.targetInput">targetInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget">DatabaseMigrationMigrationDataTransferMediumDetailsTarget</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.accessKeyId">accessKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.secretAccessKey">secretAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.sharedStorageMountTargetId">sharedStorageMountTargetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails">DatabaseMigrationMigrationDataTransferMediumDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `objectStorageBucket`<sup>Required</sup> <a name="objectStorageBucket" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.objectStorageBucket"></a>

```java
public DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference getObjectStorageBucket();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.source"></a>

```java
public DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference getSource();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference">DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference</a>

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.target"></a>

```java
public DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference getTarget();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference">DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference</a>

---

##### `accessKeyIdInput`<sup>Optional</sup> <a name="accessKeyIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.accessKeyIdInput"></a>

```java
public java.lang.String getAccessKeyIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `objectStorageBucketInput`<sup>Optional</sup> <a name="objectStorageBucketInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.objectStorageBucketInput"></a>

```java
public DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket getObjectStorageBucketInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `secretAccessKeyInput`<sup>Optional</sup> <a name="secretAccessKeyInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.secretAccessKeyInput"></a>

```java
public java.lang.String getSecretAccessKeyInput();
```

- *Type:* java.lang.String

---

##### `sharedStorageMountTargetIdInput`<sup>Optional</sup> <a name="sharedStorageMountTargetIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.sharedStorageMountTargetIdInput"></a>

```java
public java.lang.String getSharedStorageMountTargetIdInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.sourceInput"></a>

```java
public DatabaseMigrationMigrationDataTransferMediumDetailsSource getSourceInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource">DatabaseMigrationMigrationDataTransferMediumDetailsSource</a>

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.targetInput"></a>

```java
public DatabaseMigrationMigrationDataTransferMediumDetailsTarget getTargetInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget">DatabaseMigrationMigrationDataTransferMediumDetailsTarget</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.accessKeyId"></a>

```java
public java.lang.String getAccessKeyId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `secretAccessKey`<sup>Required</sup> <a name="secretAccessKey" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.secretAccessKey"></a>

```java
public java.lang.String getSecretAccessKey();
```

- *Type:* java.lang.String

---

##### `sharedStorageMountTargetId`<sup>Required</sup> <a name="sharedStorageMountTargetId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.sharedStorageMountTargetId"></a>

```java
public java.lang.String getSharedStorageMountTargetId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.internalValue"></a>

```java
public DatabaseMigrationMigrationDataTransferMediumDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails">DatabaseMigrationMigrationDataTransferMediumDetails</a>

---


### DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference <a name="DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference;

new DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.resetOciHome">resetOciHome</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.resetWalletLocation">resetWalletLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOciHome` <a name="resetOciHome" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.resetOciHome"></a>

```java
public void resetOciHome()
```

##### `resetWalletLocation` <a name="resetWalletLocation" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.resetWalletLocation"></a>

```java
public void resetWalletLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.kindInput">kindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.ociHomeInput">ociHomeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.walletLocationInput">walletLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.ociHome">ociHome</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.walletLocation">walletLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource">DatabaseMigrationMigrationDataTransferMediumDetailsSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.kindInput"></a>

```java
public java.lang.String getKindInput();
```

- *Type:* java.lang.String

---

##### `ociHomeInput`<sup>Optional</sup> <a name="ociHomeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.ociHomeInput"></a>

```java
public java.lang.String getOciHomeInput();
```

- *Type:* java.lang.String

---

##### `walletLocationInput`<sup>Optional</sup> <a name="walletLocationInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.walletLocationInput"></a>

```java
public java.lang.String getWalletLocationInput();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `ociHome`<sup>Required</sup> <a name="ociHome" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.ociHome"></a>

```java
public java.lang.String getOciHome();
```

- *Type:* java.lang.String

---

##### `walletLocation`<sup>Required</sup> <a name="walletLocation" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.walletLocation"></a>

```java
public java.lang.String getWalletLocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.internalValue"></a>

```java
public DatabaseMigrationMigrationDataTransferMediumDetailsSource getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource">DatabaseMigrationMigrationDataTransferMediumDetailsSource</a>

---


### DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference <a name="DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference;

new DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.resetOciHome">resetOciHome</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.resetWalletLocation">resetWalletLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOciHome` <a name="resetOciHome" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.resetOciHome"></a>

```java
public void resetOciHome()
```

##### `resetWalletLocation` <a name="resetWalletLocation" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.resetWalletLocation"></a>

```java
public void resetWalletLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.kindInput">kindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.ociHomeInput">ociHomeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.walletLocationInput">walletLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.ociHome">ociHome</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.walletLocation">walletLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget">DatabaseMigrationMigrationDataTransferMediumDetailsTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.kindInput"></a>

```java
public java.lang.String getKindInput();
```

- *Type:* java.lang.String

---

##### `ociHomeInput`<sup>Optional</sup> <a name="ociHomeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.ociHomeInput"></a>

```java
public java.lang.String getOciHomeInput();
```

- *Type:* java.lang.String

---

##### `walletLocationInput`<sup>Optional</sup> <a name="walletLocationInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.walletLocationInput"></a>

```java
public java.lang.String getWalletLocationInput();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `ociHome`<sup>Required</sup> <a name="ociHome" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.ociHome"></a>

```java
public java.lang.String getOciHome();
```

- *Type:* java.lang.String

---

##### `walletLocation`<sup>Required</sup> <a name="walletLocation" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.walletLocation"></a>

```java
public java.lang.String getWalletLocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.internalValue"></a>

```java
public DatabaseMigrationMigrationDataTransferMediumDetailsTarget getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget">DatabaseMigrationMigrationDataTransferMediumDetailsTarget</a>

---


### DatabaseMigrationMigrationExcludeObjectsList <a name="DatabaseMigrationMigrationExcludeObjectsList" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationExcludeObjectsList;

new DatabaseMigrationMigrationExcludeObjectsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.get"></a>

```java
public DatabaseMigrationMigrationExcludeObjectsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects">DatabaseMigrationMigrationExcludeObjects</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects">DatabaseMigrationMigrationExcludeObjects</a>>

---


### DatabaseMigrationMigrationExcludeObjectsOutputReference <a name="DatabaseMigrationMigrationExcludeObjectsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationExcludeObjectsOutputReference;

new DatabaseMigrationMigrationExcludeObjectsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resetIsOmitExcludedTableFromReplication">resetIsOmitExcludedTableFromReplication</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resetSchema">resetSchema</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsOmitExcludedTableFromReplication` <a name="resetIsOmitExcludedTableFromReplication" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resetIsOmitExcludedTableFromReplication"></a>

```java
public void resetIsOmitExcludedTableFromReplication()
```

##### `resetOwner` <a name="resetOwner" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resetOwner"></a>

```java
public void resetOwner()
```

##### `resetSchema` <a name="resetSchema" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resetSchema"></a>

```java
public void resetSchema()
```

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.isOmitExcludedTableFromReplicationInput">isOmitExcludedTableFromReplicationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.objectInput">objectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.ownerInput">ownerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.isOmitExcludedTableFromReplication">isOmitExcludedTableFromReplication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.object">object</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects">DatabaseMigrationMigrationExcludeObjects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isOmitExcludedTableFromReplicationInput`<sup>Optional</sup> <a name="isOmitExcludedTableFromReplicationInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.isOmitExcludedTableFromReplicationInput"></a>

```java
public java.lang.Object getIsOmitExcludedTableFromReplicationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.objectInput"></a>

```java
public java.lang.String getObjectInput();
```

- *Type:* java.lang.String

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.ownerInput"></a>

```java
public java.lang.String getOwnerInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `isOmitExcludedTableFromReplication`<sup>Required</sup> <a name="isOmitExcludedTableFromReplication" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.isOmitExcludedTableFromReplication"></a>

```java
public java.lang.Object getIsOmitExcludedTableFromReplication();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects">DatabaseMigrationMigrationExcludeObjects</a>

---


### DatabaseMigrationMigrationGgsDetailsExtractOutputReference <a name="DatabaseMigrationMigrationGgsDetailsExtractOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference;

new DatabaseMigrationMigrationGgsDetailsExtractOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.resetLongTransDuration">resetLongTransDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.resetPerformanceProfile">resetPerformanceProfile</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLongTransDuration` <a name="resetLongTransDuration" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.resetLongTransDuration"></a>

```java
public void resetLongTransDuration()
```

##### `resetPerformanceProfile` <a name="resetPerformanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.resetPerformanceProfile"></a>

```java
public void resetPerformanceProfile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.longTransDurationInput">longTransDurationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.performanceProfileInput">performanceProfileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.longTransDuration">longTransDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.performanceProfile">performanceProfile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract">DatabaseMigrationMigrationGgsDetailsExtract</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `longTransDurationInput`<sup>Optional</sup> <a name="longTransDurationInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.longTransDurationInput"></a>

```java
public java.lang.Number getLongTransDurationInput();
```

- *Type:* java.lang.Number

---

##### `performanceProfileInput`<sup>Optional</sup> <a name="performanceProfileInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.performanceProfileInput"></a>

```java
public java.lang.String getPerformanceProfileInput();
```

- *Type:* java.lang.String

---

##### `longTransDuration`<sup>Required</sup> <a name="longTransDuration" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.longTransDuration"></a>

```java
public java.lang.Number getLongTransDuration();
```

- *Type:* java.lang.Number

---

##### `performanceProfile`<sup>Required</sup> <a name="performanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.performanceProfile"></a>

```java
public java.lang.String getPerformanceProfile();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.internalValue"></a>

```java
public DatabaseMigrationMigrationGgsDetailsExtract getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract">DatabaseMigrationMigrationGgsDetailsExtract</a>

---


### DatabaseMigrationMigrationGgsDetailsGgsDeploymentList <a name="DatabaseMigrationMigrationGgsDetailsGgsDeploymentList" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList;

new DatabaseMigrationMigrationGgsDetailsGgsDeploymentList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.get"></a>

```java
public DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference <a name="DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference;

new DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.ggsAdminCredentialsSecretId">ggsAdminCredentialsSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeployment">DatabaseMigrationMigrationGgsDetailsGgsDeployment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.deploymentId"></a>

```java
public java.lang.String getDeploymentId();
```

- *Type:* java.lang.String

---

##### `ggsAdminCredentialsSecretId`<sup>Required</sup> <a name="ggsAdminCredentialsSecretId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.ggsAdminCredentialsSecretId"></a>

```java
public java.lang.String getGgsAdminCredentialsSecretId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.internalValue"></a>

```java
public DatabaseMigrationMigrationGgsDetailsGgsDeployment getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeployment">DatabaseMigrationMigrationGgsDetailsGgsDeployment</a>

---


### DatabaseMigrationMigrationGgsDetailsOutputReference <a name="DatabaseMigrationMigrationGgsDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationGgsDetailsOutputReference;

new DatabaseMigrationMigrationGgsDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.putExtract">putExtract</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.putReplicat">putReplicat</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resetAcceptableLag">resetAcceptableLag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resetExtract">resetExtract</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resetReplicat">resetReplicat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExtract` <a name="putExtract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.putExtract"></a>

```java
public void putExtract(DatabaseMigrationMigrationGgsDetailsExtract value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.putExtract.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract">DatabaseMigrationMigrationGgsDetailsExtract</a>

---

##### `putReplicat` <a name="putReplicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.putReplicat"></a>

```java
public void putReplicat(DatabaseMigrationMigrationGgsDetailsReplicat value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.putReplicat.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat">DatabaseMigrationMigrationGgsDetailsReplicat</a>

---

##### `resetAcceptableLag` <a name="resetAcceptableLag" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resetAcceptableLag"></a>

```java
public void resetAcceptableLag()
```

##### `resetExtract` <a name="resetExtract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resetExtract"></a>

```java
public void resetExtract()
```

##### `resetReplicat` <a name="resetReplicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resetReplicat"></a>

```java
public void resetReplicat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.extract">extract</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference">DatabaseMigrationMigrationGgsDetailsExtractOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.ggsDeployment">ggsDeployment</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList">DatabaseMigrationMigrationGgsDetailsGgsDeploymentList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.replicat">replicat</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference">DatabaseMigrationMigrationGgsDetailsReplicatOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.acceptableLagInput">acceptableLagInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.extractInput">extractInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract">DatabaseMigrationMigrationGgsDetailsExtract</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.replicatInput">replicatInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat">DatabaseMigrationMigrationGgsDetailsReplicat</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.acceptableLag">acceptableLag</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails">DatabaseMigrationMigrationGgsDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `extract`<sup>Required</sup> <a name="extract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.extract"></a>

```java
public DatabaseMigrationMigrationGgsDetailsExtractOutputReference getExtract();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference">DatabaseMigrationMigrationGgsDetailsExtractOutputReference</a>

---

##### `ggsDeployment`<sup>Required</sup> <a name="ggsDeployment" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.ggsDeployment"></a>

```java
public DatabaseMigrationMigrationGgsDetailsGgsDeploymentList getGgsDeployment();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList">DatabaseMigrationMigrationGgsDetailsGgsDeploymentList</a>

---

##### `replicat`<sup>Required</sup> <a name="replicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.replicat"></a>

```java
public DatabaseMigrationMigrationGgsDetailsReplicatOutputReference getReplicat();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference">DatabaseMigrationMigrationGgsDetailsReplicatOutputReference</a>

---

##### `acceptableLagInput`<sup>Optional</sup> <a name="acceptableLagInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.acceptableLagInput"></a>

```java
public java.lang.Number getAcceptableLagInput();
```

- *Type:* java.lang.Number

---

##### `extractInput`<sup>Optional</sup> <a name="extractInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.extractInput"></a>

```java
public DatabaseMigrationMigrationGgsDetailsExtract getExtractInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract">DatabaseMigrationMigrationGgsDetailsExtract</a>

---

##### `replicatInput`<sup>Optional</sup> <a name="replicatInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.replicatInput"></a>

```java
public DatabaseMigrationMigrationGgsDetailsReplicat getReplicatInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat">DatabaseMigrationMigrationGgsDetailsReplicat</a>

---

##### `acceptableLag`<sup>Required</sup> <a name="acceptableLag" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.acceptableLag"></a>

```java
public java.lang.Number getAcceptableLag();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.internalValue"></a>

```java
public DatabaseMigrationMigrationGgsDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails">DatabaseMigrationMigrationGgsDetails</a>

---


### DatabaseMigrationMigrationGgsDetailsReplicatOutputReference <a name="DatabaseMigrationMigrationGgsDetailsReplicatOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference;

new DatabaseMigrationMigrationGgsDetailsReplicatOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.resetPerformanceProfile">resetPerformanceProfile</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPerformanceProfile` <a name="resetPerformanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.resetPerformanceProfile"></a>

```java
public void resetPerformanceProfile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.performanceProfileInput">performanceProfileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.performanceProfile">performanceProfile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat">DatabaseMigrationMigrationGgsDetailsReplicat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `performanceProfileInput`<sup>Optional</sup> <a name="performanceProfileInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.performanceProfileInput"></a>

```java
public java.lang.String getPerformanceProfileInput();
```

- *Type:* java.lang.String

---

##### `performanceProfile`<sup>Required</sup> <a name="performanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.performanceProfile"></a>

```java
public java.lang.String getPerformanceProfile();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.internalValue"></a>

```java
public DatabaseMigrationMigrationGgsDetailsReplicat getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat">DatabaseMigrationMigrationGgsDetailsReplicat</a>

---


### DatabaseMigrationMigrationHubDetailsExtractOutputReference <a name="DatabaseMigrationMigrationHubDetailsExtractOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationHubDetailsExtractOutputReference;

new DatabaseMigrationMigrationHubDetailsExtractOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.resetLongTransDuration">resetLongTransDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.resetPerformanceProfile">resetPerformanceProfile</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLongTransDuration` <a name="resetLongTransDuration" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.resetLongTransDuration"></a>

```java
public void resetLongTransDuration()
```

##### `resetPerformanceProfile` <a name="resetPerformanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.resetPerformanceProfile"></a>

```java
public void resetPerformanceProfile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.longTransDurationInput">longTransDurationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.performanceProfileInput">performanceProfileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.longTransDuration">longTransDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.performanceProfile">performanceProfile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract">DatabaseMigrationMigrationHubDetailsExtract</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `longTransDurationInput`<sup>Optional</sup> <a name="longTransDurationInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.longTransDurationInput"></a>

```java
public java.lang.Number getLongTransDurationInput();
```

- *Type:* java.lang.Number

---

##### `performanceProfileInput`<sup>Optional</sup> <a name="performanceProfileInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.performanceProfileInput"></a>

```java
public java.lang.String getPerformanceProfileInput();
```

- *Type:* java.lang.String

---

##### `longTransDuration`<sup>Required</sup> <a name="longTransDuration" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.longTransDuration"></a>

```java
public java.lang.Number getLongTransDuration();
```

- *Type:* java.lang.Number

---

##### `performanceProfile`<sup>Required</sup> <a name="performanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.performanceProfile"></a>

```java
public java.lang.String getPerformanceProfile();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.internalValue"></a>

```java
public DatabaseMigrationMigrationHubDetailsExtract getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract">DatabaseMigrationMigrationHubDetailsExtract</a>

---


### DatabaseMigrationMigrationHubDetailsOutputReference <a name="DatabaseMigrationMigrationHubDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationHubDetailsOutputReference;

new DatabaseMigrationMigrationHubDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putExtract">putExtract</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putReplicat">putReplicat</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putRestAdminCredentials">putRestAdminCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resetAcceptableLag">resetAcceptableLag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resetComputeId">resetComputeId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resetExtract">resetExtract</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resetReplicat">resetReplicat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExtract` <a name="putExtract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putExtract"></a>

```java
public void putExtract(DatabaseMigrationMigrationHubDetailsExtract value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putExtract.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract">DatabaseMigrationMigrationHubDetailsExtract</a>

---

##### `putReplicat` <a name="putReplicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putReplicat"></a>

```java
public void putReplicat(DatabaseMigrationMigrationHubDetailsReplicat value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putReplicat.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat">DatabaseMigrationMigrationHubDetailsReplicat</a>

---

##### `putRestAdminCredentials` <a name="putRestAdminCredentials" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putRestAdminCredentials"></a>

```java
public void putRestAdminCredentials(DatabaseMigrationMigrationHubDetailsRestAdminCredentials value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putRestAdminCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials">DatabaseMigrationMigrationHubDetailsRestAdminCredentials</a>

---

##### `resetAcceptableLag` <a name="resetAcceptableLag" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resetAcceptableLag"></a>

```java
public void resetAcceptableLag()
```

##### `resetComputeId` <a name="resetComputeId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resetComputeId"></a>

```java
public void resetComputeId()
```

##### `resetExtract` <a name="resetExtract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resetExtract"></a>

```java
public void resetExtract()
```

##### `resetReplicat` <a name="resetReplicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resetReplicat"></a>

```java
public void resetReplicat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.extract">extract</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference">DatabaseMigrationMigrationHubDetailsExtractOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.replicat">replicat</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference">DatabaseMigrationMigrationHubDetailsReplicatOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.restAdminCredentials">restAdminCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference">DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.acceptableLagInput">acceptableLagInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.computeIdInput">computeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.extractInput">extractInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract">DatabaseMigrationMigrationHubDetailsExtract</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.keyIdInput">keyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.replicatInput">replicatInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat">DatabaseMigrationMigrationHubDetailsReplicat</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.restAdminCredentialsInput">restAdminCredentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials">DatabaseMigrationMigrationHubDetailsRestAdminCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.vaultIdInput">vaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.acceptableLag">acceptableLag</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.computeId">computeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.vaultId">vaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails">DatabaseMigrationMigrationHubDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `extract`<sup>Required</sup> <a name="extract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.extract"></a>

```java
public DatabaseMigrationMigrationHubDetailsExtractOutputReference getExtract();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference">DatabaseMigrationMigrationHubDetailsExtractOutputReference</a>

---

##### `replicat`<sup>Required</sup> <a name="replicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.replicat"></a>

```java
public DatabaseMigrationMigrationHubDetailsReplicatOutputReference getReplicat();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference">DatabaseMigrationMigrationHubDetailsReplicatOutputReference</a>

---

##### `restAdminCredentials`<sup>Required</sup> <a name="restAdminCredentials" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.restAdminCredentials"></a>

```java
public DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference getRestAdminCredentials();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference">DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference</a>

---

##### `acceptableLagInput`<sup>Optional</sup> <a name="acceptableLagInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.acceptableLagInput"></a>

```java
public java.lang.Number getAcceptableLagInput();
```

- *Type:* java.lang.Number

---

##### `computeIdInput`<sup>Optional</sup> <a name="computeIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.computeIdInput"></a>

```java
public java.lang.String getComputeIdInput();
```

- *Type:* java.lang.String

---

##### `extractInput`<sup>Optional</sup> <a name="extractInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.extractInput"></a>

```java
public DatabaseMigrationMigrationHubDetailsExtract getExtractInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract">DatabaseMigrationMigrationHubDetailsExtract</a>

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.keyIdInput"></a>

```java
public java.lang.String getKeyIdInput();
```

- *Type:* java.lang.String

---

##### `replicatInput`<sup>Optional</sup> <a name="replicatInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.replicatInput"></a>

```java
public DatabaseMigrationMigrationHubDetailsReplicat getReplicatInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat">DatabaseMigrationMigrationHubDetailsReplicat</a>

---

##### `restAdminCredentialsInput`<sup>Optional</sup> <a name="restAdminCredentialsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.restAdminCredentialsInput"></a>

```java
public DatabaseMigrationMigrationHubDetailsRestAdminCredentials getRestAdminCredentialsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials">DatabaseMigrationMigrationHubDetailsRestAdminCredentials</a>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `vaultIdInput`<sup>Optional</sup> <a name="vaultIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.vaultIdInput"></a>

```java
public java.lang.String getVaultIdInput();
```

- *Type:* java.lang.String

---

##### `acceptableLag`<sup>Required</sup> <a name="acceptableLag" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.acceptableLag"></a>

```java
public java.lang.Number getAcceptableLag();
```

- *Type:* java.lang.Number

---

##### `computeId`<sup>Required</sup> <a name="computeId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.computeId"></a>

```java
public java.lang.String getComputeId();
```

- *Type:* java.lang.String

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.vaultId"></a>

```java
public java.lang.String getVaultId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.internalValue"></a>

```java
public DatabaseMigrationMigrationHubDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails">DatabaseMigrationMigrationHubDetails</a>

---


### DatabaseMigrationMigrationHubDetailsReplicatOutputReference <a name="DatabaseMigrationMigrationHubDetailsReplicatOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference;

new DatabaseMigrationMigrationHubDetailsReplicatOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.resetPerformanceProfile">resetPerformanceProfile</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPerformanceProfile` <a name="resetPerformanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.resetPerformanceProfile"></a>

```java
public void resetPerformanceProfile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.performanceProfileInput">performanceProfileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.performanceProfile">performanceProfile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat">DatabaseMigrationMigrationHubDetailsReplicat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `performanceProfileInput`<sup>Optional</sup> <a name="performanceProfileInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.performanceProfileInput"></a>

```java
public java.lang.String getPerformanceProfileInput();
```

- *Type:* java.lang.String

---

##### `performanceProfile`<sup>Required</sup> <a name="performanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.performanceProfile"></a>

```java
public java.lang.String getPerformanceProfile();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.internalValue"></a>

```java
public DatabaseMigrationMigrationHubDetailsReplicat getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat">DatabaseMigrationMigrationHubDetailsReplicat</a>

---


### DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference <a name="DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference;

new DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials">DatabaseMigrationMigrationHubDetailsRestAdminCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.internalValue"></a>

```java
public DatabaseMigrationMigrationHubDetailsRestAdminCredentials getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials">DatabaseMigrationMigrationHubDetailsRestAdminCredentials</a>

---


### DatabaseMigrationMigrationIncludeObjectsList <a name="DatabaseMigrationMigrationIncludeObjectsList" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationIncludeObjectsList;

new DatabaseMigrationMigrationIncludeObjectsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.get"></a>

```java
public DatabaseMigrationMigrationIncludeObjectsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects">DatabaseMigrationMigrationIncludeObjects</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects">DatabaseMigrationMigrationIncludeObjects</a>>

---


### DatabaseMigrationMigrationIncludeObjectsOutputReference <a name="DatabaseMigrationMigrationIncludeObjectsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationIncludeObjectsOutputReference;

new DatabaseMigrationMigrationIncludeObjectsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resetIsOmitExcludedTableFromReplication">resetIsOmitExcludedTableFromReplication</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resetSchema">resetSchema</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsOmitExcludedTableFromReplication` <a name="resetIsOmitExcludedTableFromReplication" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resetIsOmitExcludedTableFromReplication"></a>

```java
public void resetIsOmitExcludedTableFromReplication()
```

##### `resetOwner` <a name="resetOwner" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resetOwner"></a>

```java
public void resetOwner()
```

##### `resetSchema` <a name="resetSchema" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resetSchema"></a>

```java
public void resetSchema()
```

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.isOmitExcludedTableFromReplicationInput">isOmitExcludedTableFromReplicationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.objectInput">objectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.ownerInput">ownerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.isOmitExcludedTableFromReplication">isOmitExcludedTableFromReplication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.object">object</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects">DatabaseMigrationMigrationIncludeObjects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isOmitExcludedTableFromReplicationInput`<sup>Optional</sup> <a name="isOmitExcludedTableFromReplicationInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.isOmitExcludedTableFromReplicationInput"></a>

```java
public java.lang.Object getIsOmitExcludedTableFromReplicationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.objectInput"></a>

```java
public java.lang.String getObjectInput();
```

- *Type:* java.lang.String

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.ownerInput"></a>

```java
public java.lang.String getOwnerInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `isOmitExcludedTableFromReplication`<sup>Required</sup> <a name="isOmitExcludedTableFromReplication" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.isOmitExcludedTableFromReplication"></a>

```java
public java.lang.Object getIsOmitExcludedTableFromReplication();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects">DatabaseMigrationMigrationIncludeObjects</a>

---


### DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference <a name="DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference;

new DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetEstimate">resetEstimate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetExcludeParameters">resetExcludeParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetExportParallelismDegree">resetExportParallelismDegree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetImportParallelismDegree">resetImportParallelismDegree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetIsCluster">resetIsCluster</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetTableExistsAction">resetTableExistsAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEstimate` <a name="resetEstimate" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetEstimate"></a>

```java
public void resetEstimate()
```

##### `resetExcludeParameters` <a name="resetExcludeParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetExcludeParameters"></a>

```java
public void resetExcludeParameters()
```

##### `resetExportParallelismDegree` <a name="resetExportParallelismDegree" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetExportParallelismDegree"></a>

```java
public void resetExportParallelismDegree()
```

##### `resetImportParallelismDegree` <a name="resetImportParallelismDegree" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetImportParallelismDegree"></a>

```java
public void resetImportParallelismDegree()
```

##### `resetIsCluster` <a name="resetIsCluster" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetIsCluster"></a>

```java
public void resetIsCluster()
```

##### `resetTableExistsAction` <a name="resetTableExistsAction" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetTableExistsAction"></a>

```java
public void resetTableExistsAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.estimateInput">estimateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.excludeParametersInput">excludeParametersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.exportParallelismDegreeInput">exportParallelismDegreeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.importParallelismDegreeInput">importParallelismDegreeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.isClusterInput">isClusterInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.tableExistsActionInput">tableExistsActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.estimate">estimate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.excludeParameters">excludeParameters</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.exportParallelismDegree">exportParallelismDegree</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.importParallelismDegree">importParallelismDegree</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.isCluster">isCluster</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.tableExistsAction">tableExistsAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `estimateInput`<sup>Optional</sup> <a name="estimateInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.estimateInput"></a>

```java
public java.lang.String getEstimateInput();
```

- *Type:* java.lang.String

---

##### `excludeParametersInput`<sup>Optional</sup> <a name="excludeParametersInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.excludeParametersInput"></a>

```java
public java.util.List<java.lang.String> getExcludeParametersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exportParallelismDegreeInput`<sup>Optional</sup> <a name="exportParallelismDegreeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.exportParallelismDegreeInput"></a>

```java
public java.lang.Number getExportParallelismDegreeInput();
```

- *Type:* java.lang.Number

---

##### `importParallelismDegreeInput`<sup>Optional</sup> <a name="importParallelismDegreeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.importParallelismDegreeInput"></a>

```java
public java.lang.Number getImportParallelismDegreeInput();
```

- *Type:* java.lang.Number

---

##### `isClusterInput`<sup>Optional</sup> <a name="isClusterInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.isClusterInput"></a>

```java
public java.lang.Object getIsClusterInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tableExistsActionInput`<sup>Optional</sup> <a name="tableExistsActionInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.tableExistsActionInput"></a>

```java
public java.lang.String getTableExistsActionInput();
```

- *Type:* java.lang.String

---

##### `estimate`<sup>Required</sup> <a name="estimate" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.estimate"></a>

```java
public java.lang.String getEstimate();
```

- *Type:* java.lang.String

---

##### `excludeParameters`<sup>Required</sup> <a name="excludeParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.excludeParameters"></a>

```java
public java.util.List<java.lang.String> getExcludeParameters();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exportParallelismDegree`<sup>Required</sup> <a name="exportParallelismDegree" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.exportParallelismDegree"></a>

```java
public java.lang.Number getExportParallelismDegree();
```

- *Type:* java.lang.Number

---

##### `importParallelismDegree`<sup>Required</sup> <a name="importParallelismDegree" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.importParallelismDegree"></a>

```java
public java.lang.Number getImportParallelismDegree();
```

- *Type:* java.lang.Number

---

##### `isCluster`<sup>Required</sup> <a name="isCluster" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.isCluster"></a>

```java
public java.lang.Object getIsCluster();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tableExistsAction`<sup>Required</sup> <a name="tableExistsAction" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.tableExistsAction"></a>

```java
public java.lang.String getTableExistsAction();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.internalValue"></a>

```java
public DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters</a>

---


### DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference <a name="DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference;

new DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPath` <a name="resetPath" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.resetPath"></a>

```java
public void resetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.internalValue"></a>

```java
public DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject</a>

---


### DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference <a name="DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference;

new DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPath` <a name="resetPath" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.resetPath"></a>

```java
public void resetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.internalValue"></a>

```java
public DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject</a>

---


### DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList <a name="DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList;

new DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.get"></a>

```java
public DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps">DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps">DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps</a>>

---


### DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference <a name="DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference;

new DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resetNewValue">resetNewValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resetOldValue">resetOldValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNewValue` <a name="resetNewValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resetNewValue"></a>

```java
public void resetNewValue()
```

##### `resetOldValue` <a name="resetOldValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resetOldValue"></a>

```java
public void resetOldValue()
```

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.newValueInput">newValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.oldValueInput">oldValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.newValue">newValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.oldValue">oldValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps">DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `newValueInput`<sup>Optional</sup> <a name="newValueInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.newValueInput"></a>

```java
public java.lang.String getNewValueInput();
```

- *Type:* java.lang.String

---

##### `oldValueInput`<sup>Optional</sup> <a name="oldValueInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.oldValueInput"></a>

```java
public java.lang.String getOldValueInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `newValue`<sup>Required</sup> <a name="newValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.newValue"></a>

```java
public java.lang.String getNewValue();
```

- *Type:* java.lang.String

---

##### `oldValue`<sup>Required</sup> <a name="oldValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.oldValue"></a>

```java
public java.lang.String getOldValue();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps">DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps</a>

---


### DatabaseMigrationMigrationInitialLoadSettingsOutputReference <a name="DatabaseMigrationMigrationInitialLoadSettingsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference;

new DatabaseMigrationMigrationInitialLoadSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putDataPumpParameters">putDataPumpParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putExportDirectoryObject">putExportDirectoryObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putImportDirectoryObject">putImportDirectoryObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putMetadataRemaps">putMetadataRemaps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putTablespaceDetails">putTablespaceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetCompatibility">resetCompatibility</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetDataPumpParameters">resetDataPumpParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetExportDirectoryObject">resetExportDirectoryObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetHandleGrantErrors">resetHandleGrantErrors</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetImportDirectoryObject">resetImportDirectoryObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetIsConsistent">resetIsConsistent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetIsIgnoreExistingObjects">resetIsIgnoreExistingObjects</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetIsTzUtc">resetIsTzUtc</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetMetadataRemaps">resetMetadataRemaps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetPrimaryKeyCompatibility">resetPrimaryKeyCompatibility</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetTablespaceDetails">resetTablespaceDetails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataPumpParameters` <a name="putDataPumpParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putDataPumpParameters"></a>

```java
public void putDataPumpParameters(DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putDataPumpParameters.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters</a>

---

##### `putExportDirectoryObject` <a name="putExportDirectoryObject" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putExportDirectoryObject"></a>

```java
public void putExportDirectoryObject(DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putExportDirectoryObject.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject</a>

---

##### `putImportDirectoryObject` <a name="putImportDirectoryObject" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putImportDirectoryObject"></a>

```java
public void putImportDirectoryObject(DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putImportDirectoryObject.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject</a>

---

##### `putMetadataRemaps` <a name="putMetadataRemaps" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putMetadataRemaps"></a>

```java
public void putMetadataRemaps(IResolvable OR java.util.List<DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putMetadataRemaps.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps">DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps</a>>

---

##### `putTablespaceDetails` <a name="putTablespaceDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putTablespaceDetails"></a>

```java
public void putTablespaceDetails(DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putTablespaceDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails</a>

---

##### `resetCompatibility` <a name="resetCompatibility" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetCompatibility"></a>

```java
public void resetCompatibility()
```

##### `resetDataPumpParameters` <a name="resetDataPumpParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetDataPumpParameters"></a>

```java
public void resetDataPumpParameters()
```

##### `resetExportDirectoryObject` <a name="resetExportDirectoryObject" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetExportDirectoryObject"></a>

```java
public void resetExportDirectoryObject()
```

##### `resetHandleGrantErrors` <a name="resetHandleGrantErrors" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetHandleGrantErrors"></a>

```java
public void resetHandleGrantErrors()
```

##### `resetImportDirectoryObject` <a name="resetImportDirectoryObject" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetImportDirectoryObject"></a>

```java
public void resetImportDirectoryObject()
```

##### `resetIsConsistent` <a name="resetIsConsistent" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetIsConsistent"></a>

```java
public void resetIsConsistent()
```

##### `resetIsIgnoreExistingObjects` <a name="resetIsIgnoreExistingObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetIsIgnoreExistingObjects"></a>

```java
public void resetIsIgnoreExistingObjects()
```

##### `resetIsTzUtc` <a name="resetIsTzUtc" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetIsTzUtc"></a>

```java
public void resetIsTzUtc()
```

##### `resetMetadataRemaps` <a name="resetMetadataRemaps" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetMetadataRemaps"></a>

```java
public void resetMetadataRemaps()
```

##### `resetPrimaryKeyCompatibility` <a name="resetPrimaryKeyCompatibility" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetPrimaryKeyCompatibility"></a>

```java
public void resetPrimaryKeyCompatibility()
```

##### `resetTablespaceDetails` <a name="resetTablespaceDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetTablespaceDetails"></a>

```java
public void resetTablespaceDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.dataPumpParameters">dataPumpParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.exportDirectoryObject">exportDirectoryObject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.importDirectoryObject">importDirectoryObject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.metadataRemaps">metadataRemaps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList">DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.tablespaceDetails">tablespaceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.compatibilityInput">compatibilityInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.dataPumpParametersInput">dataPumpParametersInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.exportDirectoryObjectInput">exportDirectoryObjectInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.handleGrantErrorsInput">handleGrantErrorsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.importDirectoryObjectInput">importDirectoryObjectInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isConsistentInput">isConsistentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isIgnoreExistingObjectsInput">isIgnoreExistingObjectsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isTzUtcInput">isTzUtcInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.jobModeInput">jobModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.metadataRemapsInput">metadataRemapsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps">DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.primaryKeyCompatibilityInput">primaryKeyCompatibilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.tablespaceDetailsInput">tablespaceDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.compatibility">compatibility</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.handleGrantErrors">handleGrantErrors</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isConsistent">isConsistent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isIgnoreExistingObjects">isIgnoreExistingObjects</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isTzUtc">isTzUtc</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.jobMode">jobMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.primaryKeyCompatibility">primaryKeyCompatibility</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings">DatabaseMigrationMigrationInitialLoadSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataPumpParameters`<sup>Required</sup> <a name="dataPumpParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.dataPumpParameters"></a>

```java
public DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference getDataPumpParameters();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference</a>

---

##### `exportDirectoryObject`<sup>Required</sup> <a name="exportDirectoryObject" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.exportDirectoryObject"></a>

```java
public DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference getExportDirectoryObject();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference</a>

---

##### `importDirectoryObject`<sup>Required</sup> <a name="importDirectoryObject" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.importDirectoryObject"></a>

```java
public DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference getImportDirectoryObject();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference</a>

---

##### `metadataRemaps`<sup>Required</sup> <a name="metadataRemaps" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.metadataRemaps"></a>

```java
public DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList getMetadataRemaps();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList">DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList</a>

---

##### `tablespaceDetails`<sup>Required</sup> <a name="tablespaceDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.tablespaceDetails"></a>

```java
public DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference getTablespaceDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference</a>

---

##### `compatibilityInput`<sup>Optional</sup> <a name="compatibilityInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.compatibilityInput"></a>

```java
public java.util.List<java.lang.String> getCompatibilityInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataPumpParametersInput`<sup>Optional</sup> <a name="dataPumpParametersInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.dataPumpParametersInput"></a>

```java
public DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters getDataPumpParametersInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters</a>

---

##### `exportDirectoryObjectInput`<sup>Optional</sup> <a name="exportDirectoryObjectInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.exportDirectoryObjectInput"></a>

```java
public DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject getExportDirectoryObjectInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject</a>

---

##### `handleGrantErrorsInput`<sup>Optional</sup> <a name="handleGrantErrorsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.handleGrantErrorsInput"></a>

```java
public java.lang.String getHandleGrantErrorsInput();
```

- *Type:* java.lang.String

---

##### `importDirectoryObjectInput`<sup>Optional</sup> <a name="importDirectoryObjectInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.importDirectoryObjectInput"></a>

```java
public DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject getImportDirectoryObjectInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject</a>

---

##### `isConsistentInput`<sup>Optional</sup> <a name="isConsistentInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isConsistentInput"></a>

```java
public java.lang.Object getIsConsistentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isIgnoreExistingObjectsInput`<sup>Optional</sup> <a name="isIgnoreExistingObjectsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isIgnoreExistingObjectsInput"></a>

```java
public java.lang.Object getIsIgnoreExistingObjectsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isTzUtcInput`<sup>Optional</sup> <a name="isTzUtcInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isTzUtcInput"></a>

```java
public java.lang.Object getIsTzUtcInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jobModeInput`<sup>Optional</sup> <a name="jobModeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.jobModeInput"></a>

```java
public java.lang.String getJobModeInput();
```

- *Type:* java.lang.String

---

##### `metadataRemapsInput`<sup>Optional</sup> <a name="metadataRemapsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.metadataRemapsInput"></a>

```java
public java.lang.Object getMetadataRemapsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps">DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps</a>>

---

##### `primaryKeyCompatibilityInput`<sup>Optional</sup> <a name="primaryKeyCompatibilityInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.primaryKeyCompatibilityInput"></a>

```java
public java.lang.String getPrimaryKeyCompatibilityInput();
```

- *Type:* java.lang.String

---

##### `tablespaceDetailsInput`<sup>Optional</sup> <a name="tablespaceDetailsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.tablespaceDetailsInput"></a>

```java
public DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails getTablespaceDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails</a>

---

##### `compatibility`<sup>Required</sup> <a name="compatibility" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.compatibility"></a>

```java
public java.util.List<java.lang.String> getCompatibility();
```

- *Type:* java.util.List<java.lang.String>

---

##### `handleGrantErrors`<sup>Required</sup> <a name="handleGrantErrors" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.handleGrantErrors"></a>

```java
public java.lang.String getHandleGrantErrors();
```

- *Type:* java.lang.String

---

##### `isConsistent`<sup>Required</sup> <a name="isConsistent" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isConsistent"></a>

```java
public java.lang.Object getIsConsistent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isIgnoreExistingObjects`<sup>Required</sup> <a name="isIgnoreExistingObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isIgnoreExistingObjects"></a>

```java
public java.lang.Object getIsIgnoreExistingObjects();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isTzUtc`<sup>Required</sup> <a name="isTzUtc" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isTzUtc"></a>

```java
public java.lang.Object getIsTzUtc();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jobMode`<sup>Required</sup> <a name="jobMode" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.jobMode"></a>

```java
public java.lang.String getJobMode();
```

- *Type:* java.lang.String

---

##### `primaryKeyCompatibility`<sup>Required</sup> <a name="primaryKeyCompatibility" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.primaryKeyCompatibility"></a>

```java
public java.lang.String getPrimaryKeyCompatibility();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.internalValue"></a>

```java
public DatabaseMigrationMigrationInitialLoadSettings getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings">DatabaseMigrationMigrationInitialLoadSettings</a>

---


### DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference <a name="DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference;

new DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetBlockSizeInKbs">resetBlockSizeInKbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetExtendSizeInMbs">resetExtendSizeInMbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetIsAutoCreate">resetIsAutoCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetIsBigFile">resetIsBigFile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetRemapTarget">resetRemapTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBlockSizeInKbs` <a name="resetBlockSizeInKbs" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetBlockSizeInKbs"></a>

```java
public void resetBlockSizeInKbs()
```

##### `resetExtendSizeInMbs` <a name="resetExtendSizeInMbs" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetExtendSizeInMbs"></a>

```java
public void resetExtendSizeInMbs()
```

##### `resetIsAutoCreate` <a name="resetIsAutoCreate" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetIsAutoCreate"></a>

```java
public void resetIsAutoCreate()
```

##### `resetIsBigFile` <a name="resetIsBigFile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetIsBigFile"></a>

```java
public void resetIsBigFile()
```

##### `resetRemapTarget` <a name="resetRemapTarget" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetRemapTarget"></a>

```java
public void resetRemapTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.blockSizeInKbsInput">blockSizeInKbsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.extendSizeInMbsInput">extendSizeInMbsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isAutoCreateInput">isAutoCreateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isBigFileInput">isBigFileInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.remapTargetInput">remapTargetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.targetTypeInput">targetTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.blockSizeInKbs">blockSizeInKbs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.extendSizeInMbs">extendSizeInMbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isAutoCreate">isAutoCreate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isBigFile">isBigFile</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.remapTarget">remapTarget</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.targetType">targetType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `blockSizeInKbsInput`<sup>Optional</sup> <a name="blockSizeInKbsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.blockSizeInKbsInput"></a>

```java
public java.lang.String getBlockSizeInKbsInput();
```

- *Type:* java.lang.String

---

##### `extendSizeInMbsInput`<sup>Optional</sup> <a name="extendSizeInMbsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.extendSizeInMbsInput"></a>

```java
public java.lang.Number getExtendSizeInMbsInput();
```

- *Type:* java.lang.Number

---

##### `isAutoCreateInput`<sup>Optional</sup> <a name="isAutoCreateInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isAutoCreateInput"></a>

```java
public java.lang.Object getIsAutoCreateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isBigFileInput`<sup>Optional</sup> <a name="isBigFileInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isBigFileInput"></a>

```java
public java.lang.Object getIsBigFileInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `remapTargetInput`<sup>Optional</sup> <a name="remapTargetInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.remapTargetInput"></a>

```java
public java.lang.String getRemapTargetInput();
```

- *Type:* java.lang.String

---

##### `targetTypeInput`<sup>Optional</sup> <a name="targetTypeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.targetTypeInput"></a>

```java
public java.lang.String getTargetTypeInput();
```

- *Type:* java.lang.String

---

##### `blockSizeInKbs`<sup>Required</sup> <a name="blockSizeInKbs" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.blockSizeInKbs"></a>

```java
public java.lang.String getBlockSizeInKbs();
```

- *Type:* java.lang.String

---

##### `extendSizeInMbs`<sup>Required</sup> <a name="extendSizeInMbs" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.extendSizeInMbs"></a>

```java
public java.lang.Number getExtendSizeInMbs();
```

- *Type:* java.lang.Number

---

##### `isAutoCreate`<sup>Required</sup> <a name="isAutoCreate" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isAutoCreate"></a>

```java
public java.lang.Object getIsAutoCreate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isBigFile`<sup>Required</sup> <a name="isBigFile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isBigFile"></a>

```java
public java.lang.Object getIsBigFile();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `remapTarget`<sup>Required</sup> <a name="remapTarget" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.remapTarget"></a>

```java
public java.lang.String getRemapTarget();
```

- *Type:* java.lang.String

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.targetType"></a>

```java
public java.lang.String getTargetType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.internalValue"></a>

```java
public DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails</a>

---


### DatabaseMigrationMigrationTimeoutsOutputReference <a name="DatabaseMigrationMigrationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_migration_migration.DatabaseMigrationMigrationTimeoutsOutputReference;

new DatabaseMigrationMigrationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts">DatabaseMigrationMigrationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts">DatabaseMigrationMigrationTimeouts</a>

---



