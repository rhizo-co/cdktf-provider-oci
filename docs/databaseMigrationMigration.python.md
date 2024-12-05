# `databaseMigrationMigration` Submodule <a name="`databaseMigrationMigration` Submodule" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseMigrationMigration <a name="DatabaseMigrationMigration" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration oci_database_migration_migration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  database_combination: str,
  source_database_connection_id: str,
  target_database_connection_id: str,
  type: str,
  advanced_parameters: typing.Union[IResolvable, typing.List[DatabaseMigrationMigrationAdvancedParameters]] = None,
  advisor_settings: DatabaseMigrationMigrationAdvisorSettings = None,
  bulk_include_exclude_data: str = None,
  data_transfer_medium_details: DatabaseMigrationMigrationDataTransferMediumDetails = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  exclude_objects: typing.Union[IResolvable, typing.List[DatabaseMigrationMigrationExcludeObjects]] = None,
  freeform_tags: typing.Mapping[str] = None,
  ggs_details: DatabaseMigrationMigrationGgsDetails = None,
  hub_details: DatabaseMigrationMigrationHubDetails = None,
  id: str = None,
  include_objects: typing.Union[IResolvable, typing.List[DatabaseMigrationMigrationIncludeObjects]] = None,
  initial_load_settings: DatabaseMigrationMigrationInitialLoadSettings = None,
  source_container_database_connection_id: str = None,
  timeouts: DatabaseMigrationMigrationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#compartment_id DatabaseMigrationMigration#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.databaseCombination">database_combination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#database_combination DatabaseMigrationMigration#database_combination}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.sourceDatabaseConnectionId">source_database_connection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#source_database_connection_id DatabaseMigrationMigration#source_database_connection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.targetDatabaseConnectionId">target_database_connection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#target_database_connection_id DatabaseMigrationMigration#target_database_connection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.advancedParameters">advanced_parameters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters">DatabaseMigrationMigrationAdvancedParameters</a>]]</code> | advanced_parameters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.advisorSettings">advisor_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings">DatabaseMigrationMigrationAdvisorSettings</a></code> | advisor_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.bulkIncludeExcludeData">bulk_include_exclude_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#bulk_include_exclude_data DatabaseMigrationMigration#bulk_include_exclude_data}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.dataTransferMediumDetails">data_transfer_medium_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails">DatabaseMigrationMigrationDataTransferMediumDetails</a></code> | data_transfer_medium_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#defined_tags DatabaseMigrationMigration#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#description DatabaseMigrationMigration#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#display_name DatabaseMigrationMigration#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.excludeObjects">exclude_objects</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects">DatabaseMigrationMigrationExcludeObjects</a>]]</code> | exclude_objects block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#freeform_tags DatabaseMigrationMigration#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.ggsDetails">ggs_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails">DatabaseMigrationMigrationGgsDetails</a></code> | ggs_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.hubDetails">hub_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails">DatabaseMigrationMigrationHubDetails</a></code> | hub_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#id DatabaseMigrationMigration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.includeObjects">include_objects</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects">DatabaseMigrationMigrationIncludeObjects</a>]]</code> | include_objects block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.initialLoadSettings">initial_load_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings">DatabaseMigrationMigrationInitialLoadSettings</a></code> | initial_load_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.sourceContainerDatabaseConnectionId">source_container_database_connection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#source_container_database_connection_id DatabaseMigrationMigration#source_container_database_connection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts">DatabaseMigrationMigrationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#compartment_id DatabaseMigrationMigration#compartment_id}.

---

##### `database_combination`<sup>Required</sup> <a name="database_combination" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.databaseCombination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#database_combination DatabaseMigrationMigration#database_combination}.

---

##### `source_database_connection_id`<sup>Required</sup> <a name="source_database_connection_id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.sourceDatabaseConnectionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#source_database_connection_id DatabaseMigrationMigration#source_database_connection_id}.

---

##### `target_database_connection_id`<sup>Required</sup> <a name="target_database_connection_id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.targetDatabaseConnectionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#target_database_connection_id DatabaseMigrationMigration#target_database_connection_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}.

---

##### `advanced_parameters`<sup>Optional</sup> <a name="advanced_parameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.advancedParameters"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters">DatabaseMigrationMigrationAdvancedParameters</a>]]

advanced_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#advanced_parameters DatabaseMigrationMigration#advanced_parameters}

---

##### `advisor_settings`<sup>Optional</sup> <a name="advisor_settings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.advisorSettings"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings">DatabaseMigrationMigrationAdvisorSettings</a>

advisor_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#advisor_settings DatabaseMigrationMigration#advisor_settings}

---

##### `bulk_include_exclude_data`<sup>Optional</sup> <a name="bulk_include_exclude_data" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.bulkIncludeExcludeData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#bulk_include_exclude_data DatabaseMigrationMigration#bulk_include_exclude_data}.

---

##### `data_transfer_medium_details`<sup>Optional</sup> <a name="data_transfer_medium_details" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.dataTransferMediumDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails">DatabaseMigrationMigrationDataTransferMediumDetails</a>

data_transfer_medium_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#data_transfer_medium_details DatabaseMigrationMigration#data_transfer_medium_details}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#defined_tags DatabaseMigrationMigration#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#description DatabaseMigrationMigration#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#display_name DatabaseMigrationMigration#display_name}.

---

##### `exclude_objects`<sup>Optional</sup> <a name="exclude_objects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.excludeObjects"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects">DatabaseMigrationMigrationExcludeObjects</a>]]

exclude_objects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#exclude_objects DatabaseMigrationMigration#exclude_objects}

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#freeform_tags DatabaseMigrationMigration#freeform_tags}.

---

##### `ggs_details`<sup>Optional</sup> <a name="ggs_details" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.ggsDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails">DatabaseMigrationMigrationGgsDetails</a>

ggs_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#ggs_details DatabaseMigrationMigration#ggs_details}

---

##### `hub_details`<sup>Optional</sup> <a name="hub_details" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.hubDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails">DatabaseMigrationMigrationHubDetails</a>

hub_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#hub_details DatabaseMigrationMigration#hub_details}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#id DatabaseMigrationMigration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_objects`<sup>Optional</sup> <a name="include_objects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.includeObjects"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects">DatabaseMigrationMigrationIncludeObjects</a>]]

include_objects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#include_objects DatabaseMigrationMigration#include_objects}

---

##### `initial_load_settings`<sup>Optional</sup> <a name="initial_load_settings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.initialLoadSettings"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings">DatabaseMigrationMigrationInitialLoadSettings</a>

initial_load_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#initial_load_settings DatabaseMigrationMigration#initial_load_settings}

---

##### `source_container_database_connection_id`<sup>Optional</sup> <a name="source_container_database_connection_id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.sourceContainerDatabaseConnectionId"></a>

- *Type:* str

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
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putAdvancedParameters">put_advanced_parameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putAdvisorSettings">put_advisor_settings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putDataTransferMediumDetails">put_data_transfer_medium_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putExcludeObjects">put_exclude_objects</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putGgsDetails">put_ggs_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putHubDetails">put_hub_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putIncludeObjects">put_include_objects</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putInitialLoadSettings">put_initial_load_settings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetAdvancedParameters">reset_advanced_parameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetAdvisorSettings">reset_advisor_settings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetBulkIncludeExcludeData">reset_bulk_include_exclude_data</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetDataTransferMediumDetails">reset_data_transfer_medium_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetExcludeObjects">reset_exclude_objects</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetGgsDetails">reset_ggs_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetHubDetails">reset_hub_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetIncludeObjects">reset_include_objects</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetInitialLoadSettings">reset_initial_load_settings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetSourceContainerDatabaseConnectionId">reset_source_container_database_connection_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_advanced_parameters` <a name="put_advanced_parameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putAdvancedParameters"></a>

```python
def put_advanced_parameters(
  value: typing.Union[IResolvable, typing.List[DatabaseMigrationMigrationAdvancedParameters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putAdvancedParameters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters">DatabaseMigrationMigrationAdvancedParameters</a>]]

---

##### `put_advisor_settings` <a name="put_advisor_settings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putAdvisorSettings"></a>

```python
def put_advisor_settings(
  is_ignore_errors: typing.Union[bool, IResolvable] = None,
  is_skip_advisor: typing.Union[bool, IResolvable] = None
) -> None
```

###### `is_ignore_errors`<sup>Optional</sup> <a name="is_ignore_errors" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putAdvisorSettings.parameter.isIgnoreErrors"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_ignore_errors DatabaseMigrationMigration#is_ignore_errors}.

---

###### `is_skip_advisor`<sup>Optional</sup> <a name="is_skip_advisor" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putAdvisorSettings.parameter.isSkipAdvisor"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_skip_advisor DatabaseMigrationMigration#is_skip_advisor}.

---

##### `put_data_transfer_medium_details` <a name="put_data_transfer_medium_details" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putDataTransferMediumDetails"></a>

```python
def put_data_transfer_medium_details(
  type: str,
  access_key_id: str = None,
  name: str = None,
  object_storage_bucket: DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket = None,
  region: str = None,
  secret_access_key: str = None,
  shared_storage_mount_target_id: str = None,
  source: DatabaseMigrationMigrationDataTransferMediumDetailsSource = None,
  target: DatabaseMigrationMigrationDataTransferMediumDetailsTarget = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putDataTransferMediumDetails.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}.

---

###### `access_key_id`<sup>Optional</sup> <a name="access_key_id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putDataTransferMediumDetails.parameter.accessKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#access_key_id DatabaseMigrationMigration#access_key_id}.

---

###### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putDataTransferMediumDetails.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}.

---

###### `object_storage_bucket`<sup>Optional</sup> <a name="object_storage_bucket" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putDataTransferMediumDetails.parameter.objectStorageBucket"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket</a>

object_storage_bucket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#object_storage_bucket DatabaseMigrationMigration#object_storage_bucket}

---

###### `region`<sup>Optional</sup> <a name="region" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putDataTransferMediumDetails.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#region DatabaseMigrationMigration#region}.

---

###### `secret_access_key`<sup>Optional</sup> <a name="secret_access_key" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putDataTransferMediumDetails.parameter.secretAccessKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#secret_access_key DatabaseMigrationMigration#secret_access_key}.

---

###### `shared_storage_mount_target_id`<sup>Optional</sup> <a name="shared_storage_mount_target_id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putDataTransferMediumDetails.parameter.sharedStorageMountTargetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#shared_storage_mount_target_id DatabaseMigrationMigration#shared_storage_mount_target_id}.

---

###### `source`<sup>Optional</sup> <a name="source" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putDataTransferMediumDetails.parameter.source"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource">DatabaseMigrationMigrationDataTransferMediumDetailsSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#source DatabaseMigrationMigration#source}

---

###### `target`<sup>Optional</sup> <a name="target" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putDataTransferMediumDetails.parameter.target"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget">DatabaseMigrationMigrationDataTransferMediumDetailsTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#target DatabaseMigrationMigration#target}

---

##### `put_exclude_objects` <a name="put_exclude_objects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putExcludeObjects"></a>

```python
def put_exclude_objects(
  value: typing.Union[IResolvable, typing.List[DatabaseMigrationMigrationExcludeObjects]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putExcludeObjects.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects">DatabaseMigrationMigrationExcludeObjects</a>]]

---

##### `put_ggs_details` <a name="put_ggs_details" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putGgsDetails"></a>

```python
def put_ggs_details(
  acceptable_lag: typing.Union[int, float] = None,
  extract: DatabaseMigrationMigrationGgsDetailsExtract = None,
  replicat: DatabaseMigrationMigrationGgsDetailsReplicat = None
) -> None
```

###### `acceptable_lag`<sup>Optional</sup> <a name="acceptable_lag" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putGgsDetails.parameter.acceptableLag"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#acceptable_lag DatabaseMigrationMigration#acceptable_lag}.

---

###### `extract`<sup>Optional</sup> <a name="extract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putGgsDetails.parameter.extract"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract">DatabaseMigrationMigrationGgsDetailsExtract</a>

extract block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#extract DatabaseMigrationMigration#extract}

---

###### `replicat`<sup>Optional</sup> <a name="replicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putGgsDetails.parameter.replicat"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat">DatabaseMigrationMigrationGgsDetailsReplicat</a>

replicat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#replicat DatabaseMigrationMigration#replicat}

---

##### `put_hub_details` <a name="put_hub_details" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putHubDetails"></a>

```python
def put_hub_details(
  key_id: str,
  rest_admin_credentials: DatabaseMigrationMigrationHubDetailsRestAdminCredentials,
  url: str,
  vault_id: str,
  acceptable_lag: typing.Union[int, float] = None,
  compute_id: str = None,
  extract: DatabaseMigrationMigrationHubDetailsExtract = None,
  replicat: DatabaseMigrationMigrationHubDetailsReplicat = None
) -> None
```

###### `key_id`<sup>Required</sup> <a name="key_id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putHubDetails.parameter.keyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#key_id DatabaseMigrationMigration#key_id}.

---

###### `rest_admin_credentials`<sup>Required</sup> <a name="rest_admin_credentials" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putHubDetails.parameter.restAdminCredentials"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials">DatabaseMigrationMigrationHubDetailsRestAdminCredentials</a>

rest_admin_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#rest_admin_credentials DatabaseMigrationMigration#rest_admin_credentials}

---

###### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putHubDetails.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#url DatabaseMigrationMigration#url}.

---

###### `vault_id`<sup>Required</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putHubDetails.parameter.vaultId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#vault_id DatabaseMigrationMigration#vault_id}.

---

###### `acceptable_lag`<sup>Optional</sup> <a name="acceptable_lag" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putHubDetails.parameter.acceptableLag"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#acceptable_lag DatabaseMigrationMigration#acceptable_lag}.

---

###### `compute_id`<sup>Optional</sup> <a name="compute_id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putHubDetails.parameter.computeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#compute_id DatabaseMigrationMigration#compute_id}.

---

###### `extract`<sup>Optional</sup> <a name="extract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putHubDetails.parameter.extract"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract">DatabaseMigrationMigrationHubDetailsExtract</a>

extract block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#extract DatabaseMigrationMigration#extract}

---

###### `replicat`<sup>Optional</sup> <a name="replicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putHubDetails.parameter.replicat"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat">DatabaseMigrationMigrationHubDetailsReplicat</a>

replicat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#replicat DatabaseMigrationMigration#replicat}

---

##### `put_include_objects` <a name="put_include_objects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putIncludeObjects"></a>

```python
def put_include_objects(
  value: typing.Union[IResolvable, typing.List[DatabaseMigrationMigrationIncludeObjects]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putIncludeObjects.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects">DatabaseMigrationMigrationIncludeObjects</a>]]

---

##### `put_initial_load_settings` <a name="put_initial_load_settings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putInitialLoadSettings"></a>

```python
def put_initial_load_settings(
  job_mode: str,
  compatibility: typing.List[str] = None,
  data_pump_parameters: DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters = None,
  export_directory_object: DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject = None,
  handle_grant_errors: str = None,
  import_directory_object: DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject = None,
  is_consistent: typing.Union[bool, IResolvable] = None,
  is_ignore_existing_objects: typing.Union[bool, IResolvable] = None,
  is_tz_utc: typing.Union[bool, IResolvable] = None,
  metadata_remaps: typing.Union[IResolvable, typing.List[DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps]] = None,
  primary_key_compatibility: str = None,
  tablespace_details: DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails = None
) -> None
```

###### `job_mode`<sup>Required</sup> <a name="job_mode" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putInitialLoadSettings.parameter.jobMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#job_mode DatabaseMigrationMigration#job_mode}.

---

###### `compatibility`<sup>Optional</sup> <a name="compatibility" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putInitialLoadSettings.parameter.compatibility"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#compatibility DatabaseMigrationMigration#compatibility}.

---

###### `data_pump_parameters`<sup>Optional</sup> <a name="data_pump_parameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putInitialLoadSettings.parameter.dataPumpParameters"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters</a>

data_pump_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#data_pump_parameters DatabaseMigrationMigration#data_pump_parameters}

---

###### `export_directory_object`<sup>Optional</sup> <a name="export_directory_object" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putInitialLoadSettings.parameter.exportDirectoryObject"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject</a>

export_directory_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#export_directory_object DatabaseMigrationMigration#export_directory_object}

---

###### `handle_grant_errors`<sup>Optional</sup> <a name="handle_grant_errors" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putInitialLoadSettings.parameter.handleGrantErrors"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#handle_grant_errors DatabaseMigrationMigration#handle_grant_errors}.

---

###### `import_directory_object`<sup>Optional</sup> <a name="import_directory_object" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putInitialLoadSettings.parameter.importDirectoryObject"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject</a>

import_directory_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#import_directory_object DatabaseMigrationMigration#import_directory_object}

---

###### `is_consistent`<sup>Optional</sup> <a name="is_consistent" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putInitialLoadSettings.parameter.isConsistent"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_consistent DatabaseMigrationMigration#is_consistent}.

---

###### `is_ignore_existing_objects`<sup>Optional</sup> <a name="is_ignore_existing_objects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putInitialLoadSettings.parameter.isIgnoreExistingObjects"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_ignore_existing_objects DatabaseMigrationMigration#is_ignore_existing_objects}.

---

###### `is_tz_utc`<sup>Optional</sup> <a name="is_tz_utc" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putInitialLoadSettings.parameter.isTzUtc"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_tz_utc DatabaseMigrationMigration#is_tz_utc}.

---

###### `metadata_remaps`<sup>Optional</sup> <a name="metadata_remaps" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putInitialLoadSettings.parameter.metadataRemaps"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps">DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps</a>]]

metadata_remaps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#metadata_remaps DatabaseMigrationMigration#metadata_remaps}

---

###### `primary_key_compatibility`<sup>Optional</sup> <a name="primary_key_compatibility" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putInitialLoadSettings.parameter.primaryKeyCompatibility"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#primary_key_compatibility DatabaseMigrationMigration#primary_key_compatibility}.

---

###### `tablespace_details`<sup>Optional</sup> <a name="tablespace_details" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putInitialLoadSettings.parameter.tablespaceDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails</a>

tablespace_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#tablespace_details DatabaseMigrationMigration#tablespace_details}

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#create DatabaseMigrationMigration#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#delete DatabaseMigrationMigration#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#update DatabaseMigrationMigration#update}.

---

##### `reset_advanced_parameters` <a name="reset_advanced_parameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetAdvancedParameters"></a>

```python
def reset_advanced_parameters() -> None
```

##### `reset_advisor_settings` <a name="reset_advisor_settings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetAdvisorSettings"></a>

```python
def reset_advisor_settings() -> None
```

##### `reset_bulk_include_exclude_data` <a name="reset_bulk_include_exclude_data" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetBulkIncludeExcludeData"></a>

```python
def reset_bulk_include_exclude_data() -> None
```

##### `reset_data_transfer_medium_details` <a name="reset_data_transfer_medium_details" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetDataTransferMediumDetails"></a>

```python
def reset_data_transfer_medium_details() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_exclude_objects` <a name="reset_exclude_objects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetExcludeObjects"></a>

```python
def reset_exclude_objects() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_ggs_details` <a name="reset_ggs_details" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetGgsDetails"></a>

```python
def reset_ggs_details() -> None
```

##### `reset_hub_details` <a name="reset_hub_details" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetHubDetails"></a>

```python
def reset_hub_details() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_include_objects` <a name="reset_include_objects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetIncludeObjects"></a>

```python
def reset_include_objects() -> None
```

##### `reset_initial_load_settings` <a name="reset_initial_load_settings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetInitialLoadSettings"></a>

```python
def reset_initial_load_settings() -> None
```

##### `reset_source_container_database_connection_id` <a name="reset_source_container_database_connection_id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetSourceContainerDatabaseConnectionId"></a>

```python
def reset_source_container_database_connection_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseMigrationMigration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigration.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseMigrationMigration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseMigrationMigration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseMigrationMigration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseMigrationMigration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.advancedParameters">advanced_parameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList">DatabaseMigrationMigrationAdvancedParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.advisorSettings">advisor_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference">DatabaseMigrationMigrationAdvisorSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.dataTransferMediumDetails">data_transfer_medium_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference">DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.excludeObjects">exclude_objects</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList">DatabaseMigrationMigrationExcludeObjectsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.executingJobId">executing_job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.ggsDetails">ggs_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference">DatabaseMigrationMigrationGgsDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.hubDetails">hub_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference">DatabaseMigrationMigrationHubDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.includeObjects">include_objects</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList">DatabaseMigrationMigrationIncludeObjectsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.initialLoadSettings">initial_load_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference">DatabaseMigrationMigrationInitialLoadSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeLastMigration">time_last_migration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference">DatabaseMigrationMigrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.waitAfter">wait_after</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.advancedParametersInput">advanced_parameters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters">DatabaseMigrationMigrationAdvancedParameters</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.advisorSettingsInput">advisor_settings_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings">DatabaseMigrationMigrationAdvisorSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.bulkIncludeExcludeDataInput">bulk_include_exclude_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.databaseCombinationInput">database_combination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.dataTransferMediumDetailsInput">data_transfer_medium_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails">DatabaseMigrationMigrationDataTransferMediumDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.excludeObjectsInput">exclude_objects_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects">DatabaseMigrationMigrationExcludeObjects</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.ggsDetailsInput">ggs_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails">DatabaseMigrationMigrationGgsDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.hubDetailsInput">hub_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails">DatabaseMigrationMigrationHubDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.includeObjectsInput">include_objects_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects">DatabaseMigrationMigrationIncludeObjects</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.initialLoadSettingsInput">initial_load_settings_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings">DatabaseMigrationMigrationInitialLoadSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.sourceContainerDatabaseConnectionIdInput">source_container_database_connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.sourceDatabaseConnectionIdInput">source_database_connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.targetDatabaseConnectionIdInput">target_database_connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts">DatabaseMigrationMigrationTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.bulkIncludeExcludeData">bulk_include_exclude_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.databaseCombination">database_combination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.sourceContainerDatabaseConnectionId">source_container_database_connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.sourceDatabaseConnectionId">source_database_connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.targetDatabaseConnectionId">target_database_connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `advanced_parameters`<sup>Required</sup> <a name="advanced_parameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.advancedParameters"></a>

```python
advanced_parameters: DatabaseMigrationMigrationAdvancedParametersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList">DatabaseMigrationMigrationAdvancedParametersList</a>

---

##### `advisor_settings`<sup>Required</sup> <a name="advisor_settings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.advisorSettings"></a>

```python
advisor_settings: DatabaseMigrationMigrationAdvisorSettingsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference">DatabaseMigrationMigrationAdvisorSettingsOutputReference</a>

---

##### `data_transfer_medium_details`<sup>Required</sup> <a name="data_transfer_medium_details" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.dataTransferMediumDetails"></a>

```python
data_transfer_medium_details: DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference">DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference</a>

---

##### `exclude_objects`<sup>Required</sup> <a name="exclude_objects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.excludeObjects"></a>

```python
exclude_objects: DatabaseMigrationMigrationExcludeObjectsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList">DatabaseMigrationMigrationExcludeObjectsList</a>

---

##### `executing_job_id`<sup>Required</sup> <a name="executing_job_id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.executingJobId"></a>

```python
executing_job_id: str
```

- *Type:* str

---

##### `ggs_details`<sup>Required</sup> <a name="ggs_details" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.ggsDetails"></a>

```python
ggs_details: DatabaseMigrationMigrationGgsDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference">DatabaseMigrationMigrationGgsDetailsOutputReference</a>

---

##### `hub_details`<sup>Required</sup> <a name="hub_details" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.hubDetails"></a>

```python
hub_details: DatabaseMigrationMigrationHubDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference">DatabaseMigrationMigrationHubDetailsOutputReference</a>

---

##### `include_objects`<sup>Required</sup> <a name="include_objects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.includeObjects"></a>

```python
include_objects: DatabaseMigrationMigrationIncludeObjectsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList">DatabaseMigrationMigrationIncludeObjectsList</a>

---

##### `initial_load_settings`<sup>Required</sup> <a name="initial_load_settings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.initialLoadSettings"></a>

```python
initial_load_settings: DatabaseMigrationMigrationInitialLoadSettingsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference">DatabaseMigrationMigrationInitialLoadSettingsOutputReference</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_last_migration`<sup>Required</sup> <a name="time_last_migration" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeLastMigration"></a>

```python
time_last_migration: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeouts"></a>

```python
timeouts: DatabaseMigrationMigrationTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference">DatabaseMigrationMigrationTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `wait_after`<sup>Required</sup> <a name="wait_after" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.waitAfter"></a>

```python
wait_after: str
```

- *Type:* str

---

##### `advanced_parameters_input`<sup>Optional</sup> <a name="advanced_parameters_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.advancedParametersInput"></a>

```python
advanced_parameters_input: typing.Union[IResolvable, typing.List[DatabaseMigrationMigrationAdvancedParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters">DatabaseMigrationMigrationAdvancedParameters</a>]]

---

##### `advisor_settings_input`<sup>Optional</sup> <a name="advisor_settings_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.advisorSettingsInput"></a>

```python
advisor_settings_input: DatabaseMigrationMigrationAdvisorSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings">DatabaseMigrationMigrationAdvisorSettings</a>

---

##### `bulk_include_exclude_data_input`<sup>Optional</sup> <a name="bulk_include_exclude_data_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.bulkIncludeExcludeDataInput"></a>

```python
bulk_include_exclude_data_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `database_combination_input`<sup>Optional</sup> <a name="database_combination_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.databaseCombinationInput"></a>

```python
database_combination_input: str
```

- *Type:* str

---

##### `data_transfer_medium_details_input`<sup>Optional</sup> <a name="data_transfer_medium_details_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.dataTransferMediumDetailsInput"></a>

```python
data_transfer_medium_details_input: DatabaseMigrationMigrationDataTransferMediumDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails">DatabaseMigrationMigrationDataTransferMediumDetails</a>

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `exclude_objects_input`<sup>Optional</sup> <a name="exclude_objects_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.excludeObjectsInput"></a>

```python
exclude_objects_input: typing.Union[IResolvable, typing.List[DatabaseMigrationMigrationExcludeObjects]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects">DatabaseMigrationMigrationExcludeObjects</a>]]

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `ggs_details_input`<sup>Optional</sup> <a name="ggs_details_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.ggsDetailsInput"></a>

```python
ggs_details_input: DatabaseMigrationMigrationGgsDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails">DatabaseMigrationMigrationGgsDetails</a>

---

##### `hub_details_input`<sup>Optional</sup> <a name="hub_details_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.hubDetailsInput"></a>

```python
hub_details_input: DatabaseMigrationMigrationHubDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails">DatabaseMigrationMigrationHubDetails</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `include_objects_input`<sup>Optional</sup> <a name="include_objects_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.includeObjectsInput"></a>

```python
include_objects_input: typing.Union[IResolvable, typing.List[DatabaseMigrationMigrationIncludeObjects]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects">DatabaseMigrationMigrationIncludeObjects</a>]]

---

##### `initial_load_settings_input`<sup>Optional</sup> <a name="initial_load_settings_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.initialLoadSettingsInput"></a>

```python
initial_load_settings_input: DatabaseMigrationMigrationInitialLoadSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings">DatabaseMigrationMigrationInitialLoadSettings</a>

---

##### `source_container_database_connection_id_input`<sup>Optional</sup> <a name="source_container_database_connection_id_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.sourceContainerDatabaseConnectionIdInput"></a>

```python
source_container_database_connection_id_input: str
```

- *Type:* str

---

##### `source_database_connection_id_input`<sup>Optional</sup> <a name="source_database_connection_id_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.sourceDatabaseConnectionIdInput"></a>

```python
source_database_connection_id_input: str
```

- *Type:* str

---

##### `target_database_connection_id_input`<sup>Optional</sup> <a name="target_database_connection_id_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.targetDatabaseConnectionIdInput"></a>

```python
target_database_connection_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatabaseMigrationMigrationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts">DatabaseMigrationMigrationTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `bulk_include_exclude_data`<sup>Required</sup> <a name="bulk_include_exclude_data" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.bulkIncludeExcludeData"></a>

```python
bulk_include_exclude_data: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `database_combination`<sup>Required</sup> <a name="database_combination" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.databaseCombination"></a>

```python
database_combination: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `source_container_database_connection_id`<sup>Required</sup> <a name="source_container_database_connection_id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.sourceContainerDatabaseConnectionId"></a>

```python
source_container_database_connection_id: str
```

- *Type:* str

---

##### `source_database_connection_id`<sup>Required</sup> <a name="source_database_connection_id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.sourceDatabaseConnectionId"></a>

```python
source_database_connection_id: str
```

- *Type:* str

---

##### `target_database_connection_id`<sup>Required</sup> <a name="target_database_connection_id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.targetDatabaseConnectionId"></a>

```python
target_database_connection_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseMigrationMigrationAdvancedParameters <a name="DatabaseMigrationMigrationAdvancedParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters(
  data_type: str = None,
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters.property.dataType">data_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#data_type DatabaseMigrationMigration#data_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#value DatabaseMigrationMigration#value}. |

---

##### `data_type`<sup>Optional</sup> <a name="data_type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#data_type DatabaseMigrationMigration#data_type}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#value DatabaseMigrationMigration#value}.

---

### DatabaseMigrationMigrationAdvisorSettings <a name="DatabaseMigrationMigrationAdvisorSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings(
  is_ignore_errors: typing.Union[bool, IResolvable] = None,
  is_skip_advisor: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings.property.isIgnoreErrors">is_ignore_errors</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_ignore_errors DatabaseMigrationMigration#is_ignore_errors}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings.property.isSkipAdvisor">is_skip_advisor</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_skip_advisor DatabaseMigrationMigration#is_skip_advisor}. |

---

##### `is_ignore_errors`<sup>Optional</sup> <a name="is_ignore_errors" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings.property.isIgnoreErrors"></a>

```python
is_ignore_errors: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_ignore_errors DatabaseMigrationMigration#is_ignore_errors}.

---

##### `is_skip_advisor`<sup>Optional</sup> <a name="is_skip_advisor" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings.property.isSkipAdvisor"></a>

```python
is_skip_advisor: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_skip_advisor DatabaseMigrationMigration#is_skip_advisor}.

---

### DatabaseMigrationMigrationConfig <a name="DatabaseMigrationMigrationConfig" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  database_combination: str,
  source_database_connection_id: str,
  target_database_connection_id: str,
  type: str,
  advanced_parameters: typing.Union[IResolvable, typing.List[DatabaseMigrationMigrationAdvancedParameters]] = None,
  advisor_settings: DatabaseMigrationMigrationAdvisorSettings = None,
  bulk_include_exclude_data: str = None,
  data_transfer_medium_details: DatabaseMigrationMigrationDataTransferMediumDetails = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  exclude_objects: typing.Union[IResolvable, typing.List[DatabaseMigrationMigrationExcludeObjects]] = None,
  freeform_tags: typing.Mapping[str] = None,
  ggs_details: DatabaseMigrationMigrationGgsDetails = None,
  hub_details: DatabaseMigrationMigrationHubDetails = None,
  id: str = None,
  include_objects: typing.Union[IResolvable, typing.List[DatabaseMigrationMigrationIncludeObjects]] = None,
  initial_load_settings: DatabaseMigrationMigrationInitialLoadSettings = None,
  source_container_database_connection_id: str = None,
  timeouts: DatabaseMigrationMigrationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#compartment_id DatabaseMigrationMigration#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.databaseCombination">database_combination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#database_combination DatabaseMigrationMigration#database_combination}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.sourceDatabaseConnectionId">source_database_connection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#source_database_connection_id DatabaseMigrationMigration#source_database_connection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.targetDatabaseConnectionId">target_database_connection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#target_database_connection_id DatabaseMigrationMigration#target_database_connection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.advancedParameters">advanced_parameters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters">DatabaseMigrationMigrationAdvancedParameters</a>]]</code> | advanced_parameters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.advisorSettings">advisor_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings">DatabaseMigrationMigrationAdvisorSettings</a></code> | advisor_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.bulkIncludeExcludeData">bulk_include_exclude_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#bulk_include_exclude_data DatabaseMigrationMigration#bulk_include_exclude_data}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.dataTransferMediumDetails">data_transfer_medium_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails">DatabaseMigrationMigrationDataTransferMediumDetails</a></code> | data_transfer_medium_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#defined_tags DatabaseMigrationMigration#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#description DatabaseMigrationMigration#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#display_name DatabaseMigrationMigration#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.excludeObjects">exclude_objects</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects">DatabaseMigrationMigrationExcludeObjects</a>]]</code> | exclude_objects block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#freeform_tags DatabaseMigrationMigration#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.ggsDetails">ggs_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails">DatabaseMigrationMigrationGgsDetails</a></code> | ggs_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.hubDetails">hub_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails">DatabaseMigrationMigrationHubDetails</a></code> | hub_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#id DatabaseMigrationMigration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.includeObjects">include_objects</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects">DatabaseMigrationMigrationIncludeObjects</a>]]</code> | include_objects block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.initialLoadSettings">initial_load_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings">DatabaseMigrationMigrationInitialLoadSettings</a></code> | initial_load_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.sourceContainerDatabaseConnectionId">source_container_database_connection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#source_container_database_connection_id DatabaseMigrationMigration#source_container_database_connection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts">DatabaseMigrationMigrationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#compartment_id DatabaseMigrationMigration#compartment_id}.

---

##### `database_combination`<sup>Required</sup> <a name="database_combination" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.databaseCombination"></a>

```python
database_combination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#database_combination DatabaseMigrationMigration#database_combination}.

---

##### `source_database_connection_id`<sup>Required</sup> <a name="source_database_connection_id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.sourceDatabaseConnectionId"></a>

```python
source_database_connection_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#source_database_connection_id DatabaseMigrationMigration#source_database_connection_id}.

---

##### `target_database_connection_id`<sup>Required</sup> <a name="target_database_connection_id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.targetDatabaseConnectionId"></a>

```python
target_database_connection_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#target_database_connection_id DatabaseMigrationMigration#target_database_connection_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}.

---

##### `advanced_parameters`<sup>Optional</sup> <a name="advanced_parameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.advancedParameters"></a>

```python
advanced_parameters: typing.Union[IResolvable, typing.List[DatabaseMigrationMigrationAdvancedParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters">DatabaseMigrationMigrationAdvancedParameters</a>]]

advanced_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#advanced_parameters DatabaseMigrationMigration#advanced_parameters}

---

##### `advisor_settings`<sup>Optional</sup> <a name="advisor_settings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.advisorSettings"></a>

```python
advisor_settings: DatabaseMigrationMigrationAdvisorSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings">DatabaseMigrationMigrationAdvisorSettings</a>

advisor_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#advisor_settings DatabaseMigrationMigration#advisor_settings}

---

##### `bulk_include_exclude_data`<sup>Optional</sup> <a name="bulk_include_exclude_data" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.bulkIncludeExcludeData"></a>

```python
bulk_include_exclude_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#bulk_include_exclude_data DatabaseMigrationMigration#bulk_include_exclude_data}.

---

##### `data_transfer_medium_details`<sup>Optional</sup> <a name="data_transfer_medium_details" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.dataTransferMediumDetails"></a>

```python
data_transfer_medium_details: DatabaseMigrationMigrationDataTransferMediumDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails">DatabaseMigrationMigrationDataTransferMediumDetails</a>

data_transfer_medium_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#data_transfer_medium_details DatabaseMigrationMigration#data_transfer_medium_details}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#defined_tags DatabaseMigrationMigration#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#description DatabaseMigrationMigration#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#display_name DatabaseMigrationMigration#display_name}.

---

##### `exclude_objects`<sup>Optional</sup> <a name="exclude_objects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.excludeObjects"></a>

```python
exclude_objects: typing.Union[IResolvable, typing.List[DatabaseMigrationMigrationExcludeObjects]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects">DatabaseMigrationMigrationExcludeObjects</a>]]

exclude_objects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#exclude_objects DatabaseMigrationMigration#exclude_objects}

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#freeform_tags DatabaseMigrationMigration#freeform_tags}.

---

##### `ggs_details`<sup>Optional</sup> <a name="ggs_details" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.ggsDetails"></a>

```python
ggs_details: DatabaseMigrationMigrationGgsDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails">DatabaseMigrationMigrationGgsDetails</a>

ggs_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#ggs_details DatabaseMigrationMigration#ggs_details}

---

##### `hub_details`<sup>Optional</sup> <a name="hub_details" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.hubDetails"></a>

```python
hub_details: DatabaseMigrationMigrationHubDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails">DatabaseMigrationMigrationHubDetails</a>

hub_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#hub_details DatabaseMigrationMigration#hub_details}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#id DatabaseMigrationMigration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_objects`<sup>Optional</sup> <a name="include_objects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.includeObjects"></a>

```python
include_objects: typing.Union[IResolvable, typing.List[DatabaseMigrationMigrationIncludeObjects]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects">DatabaseMigrationMigrationIncludeObjects</a>]]

include_objects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#include_objects DatabaseMigrationMigration#include_objects}

---

##### `initial_load_settings`<sup>Optional</sup> <a name="initial_load_settings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.initialLoadSettings"></a>

```python
initial_load_settings: DatabaseMigrationMigrationInitialLoadSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings">DatabaseMigrationMigrationInitialLoadSettings</a>

initial_load_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#initial_load_settings DatabaseMigrationMigration#initial_load_settings}

---

##### `source_container_database_connection_id`<sup>Optional</sup> <a name="source_container_database_connection_id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.sourceContainerDatabaseConnectionId"></a>

```python
source_container_database_connection_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#source_container_database_connection_id DatabaseMigrationMigration#source_container_database_connection_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.timeouts"></a>

```python
timeouts: DatabaseMigrationMigrationTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts">DatabaseMigrationMigrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#timeouts DatabaseMigrationMigration#timeouts}

---

### DatabaseMigrationMigrationDataTransferMediumDetails <a name="DatabaseMigrationMigrationDataTransferMediumDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails(
  type: str,
  access_key_id: str = None,
  name: str = None,
  object_storage_bucket: DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket = None,
  region: str = None,
  secret_access_key: str = None,
  shared_storage_mount_target_id: str = None,
  source: DatabaseMigrationMigrationDataTransferMediumDetailsSource = None,
  target: DatabaseMigrationMigrationDataTransferMediumDetailsTarget = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.accessKeyId">access_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#access_key_id DatabaseMigrationMigration#access_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.objectStorageBucket">object_storage_bucket</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket</a></code> | object_storage_bucket block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#region DatabaseMigrationMigration#region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.secretAccessKey">secret_access_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#secret_access_key DatabaseMigrationMigration#secret_access_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.sharedStorageMountTargetId">shared_storage_mount_target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#shared_storage_mount_target_id DatabaseMigrationMigration#shared_storage_mount_target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource">DatabaseMigrationMigrationDataTransferMediumDetailsSource</a></code> | source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.target">target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget">DatabaseMigrationMigrationDataTransferMediumDetailsTarget</a></code> | target block. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}.

---

##### `access_key_id`<sup>Optional</sup> <a name="access_key_id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#access_key_id DatabaseMigrationMigration#access_key_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}.

---

##### `object_storage_bucket`<sup>Optional</sup> <a name="object_storage_bucket" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.objectStorageBucket"></a>

```python
object_storage_bucket: DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket</a>

object_storage_bucket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#object_storage_bucket DatabaseMigrationMigration#object_storage_bucket}

---

##### `region`<sup>Optional</sup> <a name="region" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#region DatabaseMigrationMigration#region}.

---

##### `secret_access_key`<sup>Optional</sup> <a name="secret_access_key" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.secretAccessKey"></a>

```python
secret_access_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#secret_access_key DatabaseMigrationMigration#secret_access_key}.

---

##### `shared_storage_mount_target_id`<sup>Optional</sup> <a name="shared_storage_mount_target_id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.sharedStorageMountTargetId"></a>

```python
shared_storage_mount_target_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#shared_storage_mount_target_id DatabaseMigrationMigration#shared_storage_mount_target_id}.

---

##### `source`<sup>Optional</sup> <a name="source" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.source"></a>

```python
source: DatabaseMigrationMigrationDataTransferMediumDetailsSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource">DatabaseMigrationMigrationDataTransferMediumDetailsSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#source DatabaseMigrationMigration#source}

---

##### `target`<sup>Optional</sup> <a name="target" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.target"></a>

```python
target: DatabaseMigrationMigrationDataTransferMediumDetailsTarget
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget">DatabaseMigrationMigrationDataTransferMediumDetailsTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#target DatabaseMigrationMigration#target}

---

### DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket <a name="DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket(
  bucket: str = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#bucket DatabaseMigrationMigration#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#namespace DatabaseMigrationMigration#namespace}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#bucket DatabaseMigrationMigration#bucket}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#namespace DatabaseMigrationMigration#namespace}.

---

### DatabaseMigrationMigrationDataTransferMediumDetailsSource <a name="DatabaseMigrationMigrationDataTransferMediumDetailsSource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource(
  kind: str,
  oci_home: str = None,
  wallet_location: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource.property.kind">kind</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#kind DatabaseMigrationMigration#kind}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource.property.ociHome">oci_home</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#oci_home DatabaseMigrationMigration#oci_home}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource.property.walletLocation">wallet_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#wallet_location DatabaseMigrationMigration#wallet_location}. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource.property.kind"></a>

```python
kind: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#kind DatabaseMigrationMigration#kind}.

---

##### `oci_home`<sup>Optional</sup> <a name="oci_home" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource.property.ociHome"></a>

```python
oci_home: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#oci_home DatabaseMigrationMigration#oci_home}.

---

##### `wallet_location`<sup>Optional</sup> <a name="wallet_location" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource.property.walletLocation"></a>

```python
wallet_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#wallet_location DatabaseMigrationMigration#wallet_location}.

---

### DatabaseMigrationMigrationDataTransferMediumDetailsTarget <a name="DatabaseMigrationMigrationDataTransferMediumDetailsTarget" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget(
  kind: str,
  oci_home: str = None,
  wallet_location: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget.property.kind">kind</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#kind DatabaseMigrationMigration#kind}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget.property.ociHome">oci_home</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#oci_home DatabaseMigrationMigration#oci_home}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget.property.walletLocation">wallet_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#wallet_location DatabaseMigrationMigration#wallet_location}. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget.property.kind"></a>

```python
kind: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#kind DatabaseMigrationMigration#kind}.

---

##### `oci_home`<sup>Optional</sup> <a name="oci_home" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget.property.ociHome"></a>

```python
oci_home: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#oci_home DatabaseMigrationMigration#oci_home}.

---

##### `wallet_location`<sup>Optional</sup> <a name="wallet_location" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget.property.walletLocation"></a>

```python
wallet_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#wallet_location DatabaseMigrationMigration#wallet_location}.

---

### DatabaseMigrationMigrationExcludeObjects <a name="DatabaseMigrationMigrationExcludeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects(
  object: str,
  is_omit_excluded_table_from_replication: typing.Union[bool, IResolvable] = None,
  owner: str = None,
  schema: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.object">object</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#object DatabaseMigrationMigration#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.isOmitExcludedTableFromReplication">is_omit_excluded_table_from_replication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_omit_excluded_table_from_replication DatabaseMigrationMigration#is_omit_excluded_table_from_replication}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#owner DatabaseMigrationMigration#owner}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.schema">schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#schema DatabaseMigrationMigration#schema}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}. |

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.object"></a>

```python
object: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#object DatabaseMigrationMigration#object}.

---

##### `is_omit_excluded_table_from_replication`<sup>Optional</sup> <a name="is_omit_excluded_table_from_replication" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.isOmitExcludedTableFromReplication"></a>

```python
is_omit_excluded_table_from_replication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_omit_excluded_table_from_replication DatabaseMigrationMigration#is_omit_excluded_table_from_replication}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.owner"></a>

```python
owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#owner DatabaseMigrationMigration#owner}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.schema"></a>

```python
schema: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#schema DatabaseMigrationMigration#schema}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}.

---

### DatabaseMigrationMigrationGgsDetails <a name="DatabaseMigrationMigrationGgsDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails(
  acceptable_lag: typing.Union[int, float] = None,
  extract: DatabaseMigrationMigrationGgsDetailsExtract = None,
  replicat: DatabaseMigrationMigrationGgsDetailsReplicat = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails.property.acceptableLag">acceptable_lag</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#acceptable_lag DatabaseMigrationMigration#acceptable_lag}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails.property.extract">extract</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract">DatabaseMigrationMigrationGgsDetailsExtract</a></code> | extract block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails.property.replicat">replicat</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat">DatabaseMigrationMigrationGgsDetailsReplicat</a></code> | replicat block. |

---

##### `acceptable_lag`<sup>Optional</sup> <a name="acceptable_lag" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails.property.acceptableLag"></a>

```python
acceptable_lag: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#acceptable_lag DatabaseMigrationMigration#acceptable_lag}.

---

##### `extract`<sup>Optional</sup> <a name="extract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails.property.extract"></a>

```python
extract: DatabaseMigrationMigrationGgsDetailsExtract
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract">DatabaseMigrationMigrationGgsDetailsExtract</a>

extract block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#extract DatabaseMigrationMigration#extract}

---

##### `replicat`<sup>Optional</sup> <a name="replicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails.property.replicat"></a>

```python
replicat: DatabaseMigrationMigrationGgsDetailsReplicat
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat">DatabaseMigrationMigrationGgsDetailsReplicat</a>

replicat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#replicat DatabaseMigrationMigration#replicat}

---

### DatabaseMigrationMigrationGgsDetailsExtract <a name="DatabaseMigrationMigrationGgsDetailsExtract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract(
  long_trans_duration: typing.Union[int, float] = None,
  performance_profile: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract.property.longTransDuration">long_trans_duration</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#long_trans_duration DatabaseMigrationMigration#long_trans_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract.property.performanceProfile">performance_profile</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}. |

---

##### `long_trans_duration`<sup>Optional</sup> <a name="long_trans_duration" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract.property.longTransDuration"></a>

```python
long_trans_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#long_trans_duration DatabaseMigrationMigration#long_trans_duration}.

---

##### `performance_profile`<sup>Optional</sup> <a name="performance_profile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract.property.performanceProfile"></a>

```python
performance_profile: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}.

---

### DatabaseMigrationMigrationGgsDetailsGgsDeployment <a name="DatabaseMigrationMigrationGgsDetailsGgsDeployment" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeployment"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeployment.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeployment()
```


### DatabaseMigrationMigrationGgsDetailsReplicat <a name="DatabaseMigrationMigrationGgsDetailsReplicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat(
  performance_profile: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat.property.performanceProfile">performance_profile</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}. |

---

##### `performance_profile`<sup>Optional</sup> <a name="performance_profile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat.property.performanceProfile"></a>

```python
performance_profile: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}.

---

### DatabaseMigrationMigrationHubDetails <a name="DatabaseMigrationMigrationHubDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationHubDetails(
  key_id: str,
  rest_admin_credentials: DatabaseMigrationMigrationHubDetailsRestAdminCredentials,
  url: str,
  vault_id: str,
  acceptable_lag: typing.Union[int, float] = None,
  compute_id: str = None,
  extract: DatabaseMigrationMigrationHubDetailsExtract = None,
  replicat: DatabaseMigrationMigrationHubDetailsReplicat = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.keyId">key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#key_id DatabaseMigrationMigration#key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.restAdminCredentials">rest_admin_credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials">DatabaseMigrationMigrationHubDetailsRestAdminCredentials</a></code> | rest_admin_credentials block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#url DatabaseMigrationMigration#url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.vaultId">vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#vault_id DatabaseMigrationMigration#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.acceptableLag">acceptable_lag</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#acceptable_lag DatabaseMigrationMigration#acceptable_lag}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.computeId">compute_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#compute_id DatabaseMigrationMigration#compute_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.extract">extract</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract">DatabaseMigrationMigrationHubDetailsExtract</a></code> | extract block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.replicat">replicat</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat">DatabaseMigrationMigrationHubDetailsReplicat</a></code> | replicat block. |

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#key_id DatabaseMigrationMigration#key_id}.

---

##### `rest_admin_credentials`<sup>Required</sup> <a name="rest_admin_credentials" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.restAdminCredentials"></a>

```python
rest_admin_credentials: DatabaseMigrationMigrationHubDetailsRestAdminCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials">DatabaseMigrationMigrationHubDetailsRestAdminCredentials</a>

rest_admin_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#rest_admin_credentials DatabaseMigrationMigration#rest_admin_credentials}

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#url DatabaseMigrationMigration#url}.

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#vault_id DatabaseMigrationMigration#vault_id}.

---

##### `acceptable_lag`<sup>Optional</sup> <a name="acceptable_lag" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.acceptableLag"></a>

```python
acceptable_lag: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#acceptable_lag DatabaseMigrationMigration#acceptable_lag}.

---

##### `compute_id`<sup>Optional</sup> <a name="compute_id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.computeId"></a>

```python
compute_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#compute_id DatabaseMigrationMigration#compute_id}.

---

##### `extract`<sup>Optional</sup> <a name="extract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.extract"></a>

```python
extract: DatabaseMigrationMigrationHubDetailsExtract
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract">DatabaseMigrationMigrationHubDetailsExtract</a>

extract block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#extract DatabaseMigrationMigration#extract}

---

##### `replicat`<sup>Optional</sup> <a name="replicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.replicat"></a>

```python
replicat: DatabaseMigrationMigrationHubDetailsReplicat
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat">DatabaseMigrationMigrationHubDetailsReplicat</a>

replicat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#replicat DatabaseMigrationMigration#replicat}

---

### DatabaseMigrationMigrationHubDetailsExtract <a name="DatabaseMigrationMigrationHubDetailsExtract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract(
  long_trans_duration: typing.Union[int, float] = None,
  performance_profile: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract.property.longTransDuration">long_trans_duration</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#long_trans_duration DatabaseMigrationMigration#long_trans_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract.property.performanceProfile">performance_profile</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}. |

---

##### `long_trans_duration`<sup>Optional</sup> <a name="long_trans_duration" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract.property.longTransDuration"></a>

```python
long_trans_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#long_trans_duration DatabaseMigrationMigration#long_trans_duration}.

---

##### `performance_profile`<sup>Optional</sup> <a name="performance_profile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract.property.performanceProfile"></a>

```python
performance_profile: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}.

---

### DatabaseMigrationMigrationHubDetailsReplicat <a name="DatabaseMigrationMigrationHubDetailsReplicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat(
  performance_profile: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat.property.performanceProfile">performance_profile</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}. |

---

##### `performance_profile`<sup>Optional</sup> <a name="performance_profile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat.property.performanceProfile"></a>

```python
performance_profile: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}.

---

### DatabaseMigrationMigrationHubDetailsRestAdminCredentials <a name="DatabaseMigrationMigrationHubDetailsRestAdminCredentials" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials(
  password: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#password DatabaseMigrationMigration#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#username DatabaseMigrationMigration#username}. |

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#password DatabaseMigrationMigration#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#username DatabaseMigrationMigration#username}.

---

### DatabaseMigrationMigrationIncludeObjects <a name="DatabaseMigrationMigrationIncludeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects(
  object: str,
  is_omit_excluded_table_from_replication: typing.Union[bool, IResolvable] = None,
  owner: str = None,
  schema: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.object">object</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#object DatabaseMigrationMigration#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.isOmitExcludedTableFromReplication">is_omit_excluded_table_from_replication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_omit_excluded_table_from_replication DatabaseMigrationMigration#is_omit_excluded_table_from_replication}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#owner DatabaseMigrationMigration#owner}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.schema">schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#schema DatabaseMigrationMigration#schema}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}. |

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.object"></a>

```python
object: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#object DatabaseMigrationMigration#object}.

---

##### `is_omit_excluded_table_from_replication`<sup>Optional</sup> <a name="is_omit_excluded_table_from_replication" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.isOmitExcludedTableFromReplication"></a>

```python
is_omit_excluded_table_from_replication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_omit_excluded_table_from_replication DatabaseMigrationMigration#is_omit_excluded_table_from_replication}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.owner"></a>

```python
owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#owner DatabaseMigrationMigration#owner}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.schema"></a>

```python
schema: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#schema DatabaseMigrationMigration#schema}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}.

---

### DatabaseMigrationMigrationInitialLoadSettings <a name="DatabaseMigrationMigrationInitialLoadSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings(
  job_mode: str,
  compatibility: typing.List[str] = None,
  data_pump_parameters: DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters = None,
  export_directory_object: DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject = None,
  handle_grant_errors: str = None,
  import_directory_object: DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject = None,
  is_consistent: typing.Union[bool, IResolvable] = None,
  is_ignore_existing_objects: typing.Union[bool, IResolvable] = None,
  is_tz_utc: typing.Union[bool, IResolvable] = None,
  metadata_remaps: typing.Union[IResolvable, typing.List[DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps]] = None,
  primary_key_compatibility: str = None,
  tablespace_details: DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.jobMode">job_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#job_mode DatabaseMigrationMigration#job_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.compatibility">compatibility</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#compatibility DatabaseMigrationMigration#compatibility}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.dataPumpParameters">data_pump_parameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters</a></code> | data_pump_parameters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.exportDirectoryObject">export_directory_object</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject</a></code> | export_directory_object block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.handleGrantErrors">handle_grant_errors</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#handle_grant_errors DatabaseMigrationMigration#handle_grant_errors}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.importDirectoryObject">import_directory_object</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject</a></code> | import_directory_object block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.isConsistent">is_consistent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_consistent DatabaseMigrationMigration#is_consistent}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.isIgnoreExistingObjects">is_ignore_existing_objects</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_ignore_existing_objects DatabaseMigrationMigration#is_ignore_existing_objects}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.isTzUtc">is_tz_utc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_tz_utc DatabaseMigrationMigration#is_tz_utc}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.metadataRemaps">metadata_remaps</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps">DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps</a>]]</code> | metadata_remaps block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.primaryKeyCompatibility">primary_key_compatibility</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#primary_key_compatibility DatabaseMigrationMigration#primary_key_compatibility}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.tablespaceDetails">tablespace_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails</a></code> | tablespace_details block. |

---

##### `job_mode`<sup>Required</sup> <a name="job_mode" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.jobMode"></a>

```python
job_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#job_mode DatabaseMigrationMigration#job_mode}.

---

##### `compatibility`<sup>Optional</sup> <a name="compatibility" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.compatibility"></a>

```python
compatibility: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#compatibility DatabaseMigrationMigration#compatibility}.

---

##### `data_pump_parameters`<sup>Optional</sup> <a name="data_pump_parameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.dataPumpParameters"></a>

```python
data_pump_parameters: DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters</a>

data_pump_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#data_pump_parameters DatabaseMigrationMigration#data_pump_parameters}

---

##### `export_directory_object`<sup>Optional</sup> <a name="export_directory_object" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.exportDirectoryObject"></a>

```python
export_directory_object: DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject</a>

export_directory_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#export_directory_object DatabaseMigrationMigration#export_directory_object}

---

##### `handle_grant_errors`<sup>Optional</sup> <a name="handle_grant_errors" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.handleGrantErrors"></a>

```python
handle_grant_errors: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#handle_grant_errors DatabaseMigrationMigration#handle_grant_errors}.

---

##### `import_directory_object`<sup>Optional</sup> <a name="import_directory_object" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.importDirectoryObject"></a>

```python
import_directory_object: DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject</a>

import_directory_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#import_directory_object DatabaseMigrationMigration#import_directory_object}

---

##### `is_consistent`<sup>Optional</sup> <a name="is_consistent" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.isConsistent"></a>

```python
is_consistent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_consistent DatabaseMigrationMigration#is_consistent}.

---

##### `is_ignore_existing_objects`<sup>Optional</sup> <a name="is_ignore_existing_objects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.isIgnoreExistingObjects"></a>

```python
is_ignore_existing_objects: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_ignore_existing_objects DatabaseMigrationMigration#is_ignore_existing_objects}.

---

##### `is_tz_utc`<sup>Optional</sup> <a name="is_tz_utc" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.isTzUtc"></a>

```python
is_tz_utc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_tz_utc DatabaseMigrationMigration#is_tz_utc}.

---

##### `metadata_remaps`<sup>Optional</sup> <a name="metadata_remaps" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.metadataRemaps"></a>

```python
metadata_remaps: typing.Union[IResolvable, typing.List[DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps">DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps</a>]]

metadata_remaps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#metadata_remaps DatabaseMigrationMigration#metadata_remaps}

---

##### `primary_key_compatibility`<sup>Optional</sup> <a name="primary_key_compatibility" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.primaryKeyCompatibility"></a>

```python
primary_key_compatibility: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#primary_key_compatibility DatabaseMigrationMigration#primary_key_compatibility}.

---

##### `tablespace_details`<sup>Optional</sup> <a name="tablespace_details" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.tablespaceDetails"></a>

```python
tablespace_details: DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails</a>

tablespace_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#tablespace_details DatabaseMigrationMigration#tablespace_details}

---

### DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters <a name="DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters(
  estimate: str = None,
  exclude_parameters: typing.List[str] = None,
  export_parallelism_degree: typing.Union[int, float] = None,
  import_parallelism_degree: typing.Union[int, float] = None,
  is_cluster: typing.Union[bool, IResolvable] = None,
  table_exists_action: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.estimate">estimate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#estimate DatabaseMigrationMigration#estimate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.excludeParameters">exclude_parameters</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#exclude_parameters DatabaseMigrationMigration#exclude_parameters}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.exportParallelismDegree">export_parallelism_degree</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#export_parallelism_degree DatabaseMigrationMigration#export_parallelism_degree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.importParallelismDegree">import_parallelism_degree</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#import_parallelism_degree DatabaseMigrationMigration#import_parallelism_degree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.isCluster">is_cluster</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_cluster DatabaseMigrationMigration#is_cluster}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.tableExistsAction">table_exists_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#table_exists_action DatabaseMigrationMigration#table_exists_action}. |

---

##### `estimate`<sup>Optional</sup> <a name="estimate" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.estimate"></a>

```python
estimate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#estimate DatabaseMigrationMigration#estimate}.

---

##### `exclude_parameters`<sup>Optional</sup> <a name="exclude_parameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.excludeParameters"></a>

```python
exclude_parameters: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#exclude_parameters DatabaseMigrationMigration#exclude_parameters}.

---

##### `export_parallelism_degree`<sup>Optional</sup> <a name="export_parallelism_degree" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.exportParallelismDegree"></a>

```python
export_parallelism_degree: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#export_parallelism_degree DatabaseMigrationMigration#export_parallelism_degree}.

---

##### `import_parallelism_degree`<sup>Optional</sup> <a name="import_parallelism_degree" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.importParallelismDegree"></a>

```python
import_parallelism_degree: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#import_parallelism_degree DatabaseMigrationMigration#import_parallelism_degree}.

---

##### `is_cluster`<sup>Optional</sup> <a name="is_cluster" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.isCluster"></a>

```python
is_cluster: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_cluster DatabaseMigrationMigration#is_cluster}.

---

##### `table_exists_action`<sup>Optional</sup> <a name="table_exists_action" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.tableExistsAction"></a>

```python
table_exists_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#table_exists_action DatabaseMigrationMigration#table_exists_action}.

---

### DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject <a name="DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject(
  name: str = None,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#path DatabaseMigrationMigration#path}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}.

---

##### `path`<sup>Optional</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#path DatabaseMigrationMigration#path}.

---

### DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject <a name="DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject(
  name: str = None,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#path DatabaseMigrationMigration#path}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}.

---

##### `path`<sup>Optional</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#path DatabaseMigrationMigration#path}.

---

### DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps <a name="DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps(
  new_value: str = None,
  old_value: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps.property.newValue">new_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#new_value DatabaseMigrationMigration#new_value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps.property.oldValue">old_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#old_value DatabaseMigrationMigration#old_value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}. |

---

##### `new_value`<sup>Optional</sup> <a name="new_value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps.property.newValue"></a>

```python
new_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#new_value DatabaseMigrationMigration#new_value}.

---

##### `old_value`<sup>Optional</sup> <a name="old_value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps.property.oldValue"></a>

```python
old_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#old_value DatabaseMigrationMigration#old_value}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}.

---

### DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails <a name="DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails(
  target_type: str,
  block_size_in_kbs: str = None,
  extend_size_in_mbs: typing.Union[int, float] = None,
  is_auto_create: typing.Union[bool, IResolvable] = None,
  is_big_file: typing.Union[bool, IResolvable] = None,
  remap_target: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.targetType">target_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#target_type DatabaseMigrationMigration#target_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.blockSizeInKbs">block_size_in_kbs</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#block_size_in_kbs DatabaseMigrationMigration#block_size_in_kbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.extendSizeInMbs">extend_size_in_mbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#extend_size_in_mbs DatabaseMigrationMigration#extend_size_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.isAutoCreate">is_auto_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_auto_create DatabaseMigrationMigration#is_auto_create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.isBigFile">is_big_file</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_big_file DatabaseMigrationMigration#is_big_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.remapTarget">remap_target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#remap_target DatabaseMigrationMigration#remap_target}. |

---

##### `target_type`<sup>Required</sup> <a name="target_type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.targetType"></a>

```python
target_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#target_type DatabaseMigrationMigration#target_type}.

---

##### `block_size_in_kbs`<sup>Optional</sup> <a name="block_size_in_kbs" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.blockSizeInKbs"></a>

```python
block_size_in_kbs: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#block_size_in_kbs DatabaseMigrationMigration#block_size_in_kbs}.

---

##### `extend_size_in_mbs`<sup>Optional</sup> <a name="extend_size_in_mbs" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.extendSizeInMbs"></a>

```python
extend_size_in_mbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#extend_size_in_mbs DatabaseMigrationMigration#extend_size_in_mbs}.

---

##### `is_auto_create`<sup>Optional</sup> <a name="is_auto_create" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.isAutoCreate"></a>

```python
is_auto_create: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_auto_create DatabaseMigrationMigration#is_auto_create}.

---

##### `is_big_file`<sup>Optional</sup> <a name="is_big_file" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.isBigFile"></a>

```python
is_big_file: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_big_file DatabaseMigrationMigration#is_big_file}.

---

##### `remap_target`<sup>Optional</sup> <a name="remap_target" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.remapTarget"></a>

```python
remap_target: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#remap_target DatabaseMigrationMigration#remap_target}.

---

### DatabaseMigrationMigrationTimeouts <a name="DatabaseMigrationMigrationTimeouts" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#create DatabaseMigrationMigration#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#delete DatabaseMigrationMigration#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#update DatabaseMigrationMigration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#create DatabaseMigrationMigration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#delete DatabaseMigrationMigration#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#update DatabaseMigrationMigration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseMigrationMigrationAdvancedParametersList <a name="DatabaseMigrationMigrationAdvancedParametersList" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseMigrationMigrationAdvancedParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters">DatabaseMigrationMigrationAdvancedParameters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatabaseMigrationMigrationAdvancedParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters">DatabaseMigrationMigrationAdvancedParameters</a>]]

---


### DatabaseMigrationMigrationAdvancedParametersOutputReference <a name="DatabaseMigrationMigrationAdvancedParametersOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resetDataType">reset_data_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_data_type` <a name="reset_data_type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resetDataType"></a>

```python
def reset_data_type() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.dataTypeInput">data_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters">DatabaseMigrationMigrationAdvancedParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_type_input`<sup>Optional</sup> <a name="data_type_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.dataTypeInput"></a>

```python
data_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseMigrationMigrationAdvancedParameters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters">DatabaseMigrationMigrationAdvancedParameters</a>]

---


### DatabaseMigrationMigrationAdvisorSettingsOutputReference <a name="DatabaseMigrationMigrationAdvisorSettingsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.resetIsIgnoreErrors">reset_is_ignore_errors</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.resetIsSkipAdvisor">reset_is_skip_advisor</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_ignore_errors` <a name="reset_is_ignore_errors" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.resetIsIgnoreErrors"></a>

```python
def reset_is_ignore_errors() -> None
```

##### `reset_is_skip_advisor` <a name="reset_is_skip_advisor" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.resetIsSkipAdvisor"></a>

```python
def reset_is_skip_advisor() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isIgnoreErrorsInput">is_ignore_errors_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isSkipAdvisorInput">is_skip_advisor_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isIgnoreErrors">is_ignore_errors</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isSkipAdvisor">is_skip_advisor</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings">DatabaseMigrationMigrationAdvisorSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_ignore_errors_input`<sup>Optional</sup> <a name="is_ignore_errors_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isIgnoreErrorsInput"></a>

```python
is_ignore_errors_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_skip_advisor_input`<sup>Optional</sup> <a name="is_skip_advisor_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isSkipAdvisorInput"></a>

```python
is_skip_advisor_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_ignore_errors`<sup>Required</sup> <a name="is_ignore_errors" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isIgnoreErrors"></a>

```python
is_ignore_errors: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_skip_advisor`<sup>Required</sup> <a name="is_skip_advisor" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isSkipAdvisor"></a>

```python
is_skip_advisor: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseMigrationMigrationAdvisorSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings">DatabaseMigrationMigrationAdvisorSettings</a>

---


### DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference <a name="DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket</a>

---


### DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference <a name="DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putObjectStorageBucket">put_object_storage_bucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putSource">put_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putTarget">put_target</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetAccessKeyId">reset_access_key_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetObjectStorageBucket">reset_object_storage_bucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetSecretAccessKey">reset_secret_access_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetSharedStorageMountTargetId">reset_shared_storage_mount_target_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetTarget">reset_target</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_object_storage_bucket` <a name="put_object_storage_bucket" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putObjectStorageBucket"></a>

```python
def put_object_storage_bucket(
  bucket: str = None,
  namespace: str = None
) -> None
```

###### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putObjectStorageBucket.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#bucket DatabaseMigrationMigration#bucket}.

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putObjectStorageBucket.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#namespace DatabaseMigrationMigration#namespace}.

---

##### `put_source` <a name="put_source" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putSource"></a>

```python
def put_source(
  kind: str,
  oci_home: str = None,
  wallet_location: str = None
) -> None
```

###### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putSource.parameter.kind"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#kind DatabaseMigrationMigration#kind}.

---

###### `oci_home`<sup>Optional</sup> <a name="oci_home" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putSource.parameter.ociHome"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#oci_home DatabaseMigrationMigration#oci_home}.

---

###### `wallet_location`<sup>Optional</sup> <a name="wallet_location" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putSource.parameter.walletLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#wallet_location DatabaseMigrationMigration#wallet_location}.

---

##### `put_target` <a name="put_target" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putTarget"></a>

```python
def put_target(
  kind: str,
  oci_home: str = None,
  wallet_location: str = None
) -> None
```

###### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putTarget.parameter.kind"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#kind DatabaseMigrationMigration#kind}.

---

###### `oci_home`<sup>Optional</sup> <a name="oci_home" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putTarget.parameter.ociHome"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#oci_home DatabaseMigrationMigration#oci_home}.

---

###### `wallet_location`<sup>Optional</sup> <a name="wallet_location" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putTarget.parameter.walletLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#wallet_location DatabaseMigrationMigration#wallet_location}.

---

##### `reset_access_key_id` <a name="reset_access_key_id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetAccessKeyId"></a>

```python
def reset_access_key_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_object_storage_bucket` <a name="reset_object_storage_bucket" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetObjectStorageBucket"></a>

```python
def reset_object_storage_bucket() -> None
```

##### `reset_region` <a name="reset_region" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_secret_access_key` <a name="reset_secret_access_key" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetSecretAccessKey"></a>

```python
def reset_secret_access_key() -> None
```

##### `reset_shared_storage_mount_target_id` <a name="reset_shared_storage_mount_target_id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetSharedStorageMountTargetId"></a>

```python
def reset_shared_storage_mount_target_id() -> None
```

##### `reset_source` <a name="reset_source" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_target` <a name="reset_target" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetTarget"></a>

```python
def reset_target() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.objectStorageBucket">object_storage_bucket</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference">DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.target">target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference">DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.accessKeyIdInput">access_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.objectStorageBucketInput">object_storage_bucket_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.secretAccessKeyInput">secret_access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.sharedStorageMountTargetIdInput">shared_storage_mount_target_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.sourceInput">source_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource">DatabaseMigrationMigrationDataTransferMediumDetailsSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.targetInput">target_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget">DatabaseMigrationMigrationDataTransferMediumDetailsTarget</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.accessKeyId">access_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.secretAccessKey">secret_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.sharedStorageMountTargetId">shared_storage_mount_target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails">DatabaseMigrationMigrationDataTransferMediumDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object_storage_bucket`<sup>Required</sup> <a name="object_storage_bucket" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.objectStorageBucket"></a>

```python
object_storage_bucket: DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.source"></a>

```python
source: DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference">DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference</a>

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.target"></a>

```python
target: DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference">DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference</a>

---

##### `access_key_id_input`<sup>Optional</sup> <a name="access_key_id_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.accessKeyIdInput"></a>

```python
access_key_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `object_storage_bucket_input`<sup>Optional</sup> <a name="object_storage_bucket_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.objectStorageBucketInput"></a>

```python
object_storage_bucket_input: DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket</a>

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `secret_access_key_input`<sup>Optional</sup> <a name="secret_access_key_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.secretAccessKeyInput"></a>

```python
secret_access_key_input: str
```

- *Type:* str

---

##### `shared_storage_mount_target_id_input`<sup>Optional</sup> <a name="shared_storage_mount_target_id_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.sharedStorageMountTargetIdInput"></a>

```python
shared_storage_mount_target_id_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.sourceInput"></a>

```python
source_input: DatabaseMigrationMigrationDataTransferMediumDetailsSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource">DatabaseMigrationMigrationDataTransferMediumDetailsSource</a>

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.targetInput"></a>

```python
target_input: DatabaseMigrationMigrationDataTransferMediumDetailsTarget
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget">DatabaseMigrationMigrationDataTransferMediumDetailsTarget</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `secret_access_key`<sup>Required</sup> <a name="secret_access_key" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.secretAccessKey"></a>

```python
secret_access_key: str
```

- *Type:* str

---

##### `shared_storage_mount_target_id`<sup>Required</sup> <a name="shared_storage_mount_target_id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.sharedStorageMountTargetId"></a>

```python
shared_storage_mount_target_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseMigrationMigrationDataTransferMediumDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails">DatabaseMigrationMigrationDataTransferMediumDetails</a>

---


### DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference <a name="DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.resetOciHome">reset_oci_home</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.resetWalletLocation">reset_wallet_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_oci_home` <a name="reset_oci_home" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.resetOciHome"></a>

```python
def reset_oci_home() -> None
```

##### `reset_wallet_location` <a name="reset_wallet_location" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.resetWalletLocation"></a>

```python
def reset_wallet_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.ociHomeInput">oci_home_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.walletLocationInput">wallet_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.ociHome">oci_home</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.walletLocation">wallet_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource">DatabaseMigrationMigrationDataTransferMediumDetailsSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `oci_home_input`<sup>Optional</sup> <a name="oci_home_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.ociHomeInput"></a>

```python
oci_home_input: str
```

- *Type:* str

---

##### `wallet_location_input`<sup>Optional</sup> <a name="wallet_location_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.walletLocationInput"></a>

```python
wallet_location_input: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `oci_home`<sup>Required</sup> <a name="oci_home" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.ociHome"></a>

```python
oci_home: str
```

- *Type:* str

---

##### `wallet_location`<sup>Required</sup> <a name="wallet_location" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.walletLocation"></a>

```python
wallet_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseMigrationMigrationDataTransferMediumDetailsSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource">DatabaseMigrationMigrationDataTransferMediumDetailsSource</a>

---


### DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference <a name="DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.resetOciHome">reset_oci_home</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.resetWalletLocation">reset_wallet_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_oci_home` <a name="reset_oci_home" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.resetOciHome"></a>

```python
def reset_oci_home() -> None
```

##### `reset_wallet_location` <a name="reset_wallet_location" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.resetWalletLocation"></a>

```python
def reset_wallet_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.ociHomeInput">oci_home_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.walletLocationInput">wallet_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.ociHome">oci_home</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.walletLocation">wallet_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget">DatabaseMigrationMigrationDataTransferMediumDetailsTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `oci_home_input`<sup>Optional</sup> <a name="oci_home_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.ociHomeInput"></a>

```python
oci_home_input: str
```

- *Type:* str

---

##### `wallet_location_input`<sup>Optional</sup> <a name="wallet_location_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.walletLocationInput"></a>

```python
wallet_location_input: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `oci_home`<sup>Required</sup> <a name="oci_home" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.ociHome"></a>

```python
oci_home: str
```

- *Type:* str

---

##### `wallet_location`<sup>Required</sup> <a name="wallet_location" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.walletLocation"></a>

```python
wallet_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseMigrationMigrationDataTransferMediumDetailsTarget
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget">DatabaseMigrationMigrationDataTransferMediumDetailsTarget</a>

---


### DatabaseMigrationMigrationExcludeObjectsList <a name="DatabaseMigrationMigrationExcludeObjectsList" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseMigrationMigrationExcludeObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects">DatabaseMigrationMigrationExcludeObjects</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatabaseMigrationMigrationExcludeObjects]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects">DatabaseMigrationMigrationExcludeObjects</a>]]

---


### DatabaseMigrationMigrationExcludeObjectsOutputReference <a name="DatabaseMigrationMigrationExcludeObjectsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resetIsOmitExcludedTableFromReplication">reset_is_omit_excluded_table_from_replication</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resetOwner">reset_owner</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resetSchema">reset_schema</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_omit_excluded_table_from_replication` <a name="reset_is_omit_excluded_table_from_replication" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resetIsOmitExcludedTableFromReplication"></a>

```python
def reset_is_omit_excluded_table_from_replication() -> None
```

##### `reset_owner` <a name="reset_owner" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resetOwner"></a>

```python
def reset_owner() -> None
```

##### `reset_schema` <a name="reset_schema" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resetSchema"></a>

```python
def reset_schema() -> None
```

##### `reset_type` <a name="reset_type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.isOmitExcludedTableFromReplicationInput">is_omit_excluded_table_from_replication_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.objectInput">object_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.isOmitExcludedTableFromReplication">is_omit_excluded_table_from_replication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects">DatabaseMigrationMigrationExcludeObjects</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_omit_excluded_table_from_replication_input`<sup>Optional</sup> <a name="is_omit_excluded_table_from_replication_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.isOmitExcludedTableFromReplicationInput"></a>

```python
is_omit_excluded_table_from_replication_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `object_input`<sup>Optional</sup> <a name="object_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.objectInput"></a>

```python
object_input: str
```

- *Type:* str

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `is_omit_excluded_table_from_replication`<sup>Required</sup> <a name="is_omit_excluded_table_from_replication" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.isOmitExcludedTableFromReplication"></a>

```python
is_omit_excluded_table_from_replication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseMigrationMigrationExcludeObjects]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects">DatabaseMigrationMigrationExcludeObjects</a>]

---


### DatabaseMigrationMigrationGgsDetailsExtractOutputReference <a name="DatabaseMigrationMigrationGgsDetailsExtractOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.resetLongTransDuration">reset_long_trans_duration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.resetPerformanceProfile">reset_performance_profile</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_long_trans_duration` <a name="reset_long_trans_duration" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.resetLongTransDuration"></a>

```python
def reset_long_trans_duration() -> None
```

##### `reset_performance_profile` <a name="reset_performance_profile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.resetPerformanceProfile"></a>

```python
def reset_performance_profile() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.longTransDurationInput">long_trans_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.performanceProfileInput">performance_profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.longTransDuration">long_trans_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.performanceProfile">performance_profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract">DatabaseMigrationMigrationGgsDetailsExtract</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `long_trans_duration_input`<sup>Optional</sup> <a name="long_trans_duration_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.longTransDurationInput"></a>

```python
long_trans_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `performance_profile_input`<sup>Optional</sup> <a name="performance_profile_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.performanceProfileInput"></a>

```python
performance_profile_input: str
```

- *Type:* str

---

##### `long_trans_duration`<sup>Required</sup> <a name="long_trans_duration" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.longTransDuration"></a>

```python
long_trans_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `performance_profile`<sup>Required</sup> <a name="performance_profile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.performanceProfile"></a>

```python
performance_profile: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseMigrationMigrationGgsDetailsExtract
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract">DatabaseMigrationMigrationGgsDetailsExtract</a>

---


### DatabaseMigrationMigrationGgsDetailsGgsDeploymentList <a name="DatabaseMigrationMigrationGgsDetailsGgsDeploymentList" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference <a name="DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.deploymentId">deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.ggsAdminCredentialsSecretId">ggs_admin_credentials_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeployment">DatabaseMigrationMigrationGgsDetailsGgsDeployment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

---

##### `ggs_admin_credentials_secret_id`<sup>Required</sup> <a name="ggs_admin_credentials_secret_id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.ggsAdminCredentialsSecretId"></a>

```python
ggs_admin_credentials_secret_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseMigrationMigrationGgsDetailsGgsDeployment
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeployment">DatabaseMigrationMigrationGgsDetailsGgsDeployment</a>

---


### DatabaseMigrationMigrationGgsDetailsOutputReference <a name="DatabaseMigrationMigrationGgsDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.putExtract">put_extract</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.putReplicat">put_replicat</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resetAcceptableLag">reset_acceptable_lag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resetExtract">reset_extract</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resetReplicat">reset_replicat</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_extract` <a name="put_extract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.putExtract"></a>

```python
def put_extract(
  long_trans_duration: typing.Union[int, float] = None,
  performance_profile: str = None
) -> None
```

###### `long_trans_duration`<sup>Optional</sup> <a name="long_trans_duration" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.putExtract.parameter.longTransDuration"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#long_trans_duration DatabaseMigrationMigration#long_trans_duration}.

---

###### `performance_profile`<sup>Optional</sup> <a name="performance_profile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.putExtract.parameter.performanceProfile"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}.

---

##### `put_replicat` <a name="put_replicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.putReplicat"></a>

```python
def put_replicat(
  performance_profile: str = None
) -> None
```

###### `performance_profile`<sup>Optional</sup> <a name="performance_profile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.putReplicat.parameter.performanceProfile"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}.

---

##### `reset_acceptable_lag` <a name="reset_acceptable_lag" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resetAcceptableLag"></a>

```python
def reset_acceptable_lag() -> None
```

##### `reset_extract` <a name="reset_extract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resetExtract"></a>

```python
def reset_extract() -> None
```

##### `reset_replicat` <a name="reset_replicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resetReplicat"></a>

```python
def reset_replicat() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.extract">extract</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference">DatabaseMigrationMigrationGgsDetailsExtractOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.ggsDeployment">ggs_deployment</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList">DatabaseMigrationMigrationGgsDetailsGgsDeploymentList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.replicat">replicat</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference">DatabaseMigrationMigrationGgsDetailsReplicatOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.acceptableLagInput">acceptable_lag_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.extractInput">extract_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract">DatabaseMigrationMigrationGgsDetailsExtract</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.replicatInput">replicat_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat">DatabaseMigrationMigrationGgsDetailsReplicat</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.acceptableLag">acceptable_lag</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails">DatabaseMigrationMigrationGgsDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `extract`<sup>Required</sup> <a name="extract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.extract"></a>

```python
extract: DatabaseMigrationMigrationGgsDetailsExtractOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference">DatabaseMigrationMigrationGgsDetailsExtractOutputReference</a>

---

##### `ggs_deployment`<sup>Required</sup> <a name="ggs_deployment" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.ggsDeployment"></a>

```python
ggs_deployment: DatabaseMigrationMigrationGgsDetailsGgsDeploymentList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList">DatabaseMigrationMigrationGgsDetailsGgsDeploymentList</a>

---

##### `replicat`<sup>Required</sup> <a name="replicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.replicat"></a>

```python
replicat: DatabaseMigrationMigrationGgsDetailsReplicatOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference">DatabaseMigrationMigrationGgsDetailsReplicatOutputReference</a>

---

##### `acceptable_lag_input`<sup>Optional</sup> <a name="acceptable_lag_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.acceptableLagInput"></a>

```python
acceptable_lag_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `extract_input`<sup>Optional</sup> <a name="extract_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.extractInput"></a>

```python
extract_input: DatabaseMigrationMigrationGgsDetailsExtract
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract">DatabaseMigrationMigrationGgsDetailsExtract</a>

---

##### `replicat_input`<sup>Optional</sup> <a name="replicat_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.replicatInput"></a>

```python
replicat_input: DatabaseMigrationMigrationGgsDetailsReplicat
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat">DatabaseMigrationMigrationGgsDetailsReplicat</a>

---

##### `acceptable_lag`<sup>Required</sup> <a name="acceptable_lag" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.acceptableLag"></a>

```python
acceptable_lag: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseMigrationMigrationGgsDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails">DatabaseMigrationMigrationGgsDetails</a>

---


### DatabaseMigrationMigrationGgsDetailsReplicatOutputReference <a name="DatabaseMigrationMigrationGgsDetailsReplicatOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.resetPerformanceProfile">reset_performance_profile</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_performance_profile` <a name="reset_performance_profile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.resetPerformanceProfile"></a>

```python
def reset_performance_profile() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.performanceProfileInput">performance_profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.performanceProfile">performance_profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat">DatabaseMigrationMigrationGgsDetailsReplicat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `performance_profile_input`<sup>Optional</sup> <a name="performance_profile_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.performanceProfileInput"></a>

```python
performance_profile_input: str
```

- *Type:* str

---

##### `performance_profile`<sup>Required</sup> <a name="performance_profile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.performanceProfile"></a>

```python
performance_profile: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseMigrationMigrationGgsDetailsReplicat
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat">DatabaseMigrationMigrationGgsDetailsReplicat</a>

---


### DatabaseMigrationMigrationHubDetailsExtractOutputReference <a name="DatabaseMigrationMigrationHubDetailsExtractOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.resetLongTransDuration">reset_long_trans_duration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.resetPerformanceProfile">reset_performance_profile</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_long_trans_duration` <a name="reset_long_trans_duration" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.resetLongTransDuration"></a>

```python
def reset_long_trans_duration() -> None
```

##### `reset_performance_profile` <a name="reset_performance_profile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.resetPerformanceProfile"></a>

```python
def reset_performance_profile() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.longTransDurationInput">long_trans_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.performanceProfileInput">performance_profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.longTransDuration">long_trans_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.performanceProfile">performance_profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract">DatabaseMigrationMigrationHubDetailsExtract</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `long_trans_duration_input`<sup>Optional</sup> <a name="long_trans_duration_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.longTransDurationInput"></a>

```python
long_trans_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `performance_profile_input`<sup>Optional</sup> <a name="performance_profile_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.performanceProfileInput"></a>

```python
performance_profile_input: str
```

- *Type:* str

---

##### `long_trans_duration`<sup>Required</sup> <a name="long_trans_duration" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.longTransDuration"></a>

```python
long_trans_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `performance_profile`<sup>Required</sup> <a name="performance_profile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.performanceProfile"></a>

```python
performance_profile: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseMigrationMigrationHubDetailsExtract
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract">DatabaseMigrationMigrationHubDetailsExtract</a>

---


### DatabaseMigrationMigrationHubDetailsOutputReference <a name="DatabaseMigrationMigrationHubDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putExtract">put_extract</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putReplicat">put_replicat</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putRestAdminCredentials">put_rest_admin_credentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resetAcceptableLag">reset_acceptable_lag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resetComputeId">reset_compute_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resetExtract">reset_extract</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resetReplicat">reset_replicat</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_extract` <a name="put_extract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putExtract"></a>

```python
def put_extract(
  long_trans_duration: typing.Union[int, float] = None,
  performance_profile: str = None
) -> None
```

###### `long_trans_duration`<sup>Optional</sup> <a name="long_trans_duration" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putExtract.parameter.longTransDuration"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#long_trans_duration DatabaseMigrationMigration#long_trans_duration}.

---

###### `performance_profile`<sup>Optional</sup> <a name="performance_profile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putExtract.parameter.performanceProfile"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}.

---

##### `put_replicat` <a name="put_replicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putReplicat"></a>

```python
def put_replicat(
  performance_profile: str = None
) -> None
```

###### `performance_profile`<sup>Optional</sup> <a name="performance_profile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putReplicat.parameter.performanceProfile"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}.

---

##### `put_rest_admin_credentials` <a name="put_rest_admin_credentials" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putRestAdminCredentials"></a>

```python
def put_rest_admin_credentials(
  password: str,
  username: str
) -> None
```

###### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putRestAdminCredentials.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#password DatabaseMigrationMigration#password}.

---

###### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putRestAdminCredentials.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#username DatabaseMigrationMigration#username}.

---

##### `reset_acceptable_lag` <a name="reset_acceptable_lag" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resetAcceptableLag"></a>

```python
def reset_acceptable_lag() -> None
```

##### `reset_compute_id` <a name="reset_compute_id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resetComputeId"></a>

```python
def reset_compute_id() -> None
```

##### `reset_extract` <a name="reset_extract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resetExtract"></a>

```python
def reset_extract() -> None
```

##### `reset_replicat` <a name="reset_replicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resetReplicat"></a>

```python
def reset_replicat() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.extract">extract</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference">DatabaseMigrationMigrationHubDetailsExtractOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.replicat">replicat</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference">DatabaseMigrationMigrationHubDetailsReplicatOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.restAdminCredentials">rest_admin_credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference">DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.acceptableLagInput">acceptable_lag_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.computeIdInput">compute_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.extractInput">extract_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract">DatabaseMigrationMigrationHubDetailsExtract</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.keyIdInput">key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.replicatInput">replicat_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat">DatabaseMigrationMigrationHubDetailsReplicat</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.restAdminCredentialsInput">rest_admin_credentials_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials">DatabaseMigrationMigrationHubDetailsRestAdminCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.vaultIdInput">vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.acceptableLag">acceptable_lag</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.computeId">compute_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.vaultId">vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails">DatabaseMigrationMigrationHubDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `extract`<sup>Required</sup> <a name="extract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.extract"></a>

```python
extract: DatabaseMigrationMigrationHubDetailsExtractOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference">DatabaseMigrationMigrationHubDetailsExtractOutputReference</a>

---

##### `replicat`<sup>Required</sup> <a name="replicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.replicat"></a>

```python
replicat: DatabaseMigrationMigrationHubDetailsReplicatOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference">DatabaseMigrationMigrationHubDetailsReplicatOutputReference</a>

---

##### `rest_admin_credentials`<sup>Required</sup> <a name="rest_admin_credentials" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.restAdminCredentials"></a>

```python
rest_admin_credentials: DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference">DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference</a>

---

##### `acceptable_lag_input`<sup>Optional</sup> <a name="acceptable_lag_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.acceptableLagInput"></a>

```python
acceptable_lag_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compute_id_input`<sup>Optional</sup> <a name="compute_id_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.computeIdInput"></a>

```python
compute_id_input: str
```

- *Type:* str

---

##### `extract_input`<sup>Optional</sup> <a name="extract_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.extractInput"></a>

```python
extract_input: DatabaseMigrationMigrationHubDetailsExtract
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract">DatabaseMigrationMigrationHubDetailsExtract</a>

---

##### `key_id_input`<sup>Optional</sup> <a name="key_id_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.keyIdInput"></a>

```python
key_id_input: str
```

- *Type:* str

---

##### `replicat_input`<sup>Optional</sup> <a name="replicat_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.replicatInput"></a>

```python
replicat_input: DatabaseMigrationMigrationHubDetailsReplicat
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat">DatabaseMigrationMigrationHubDetailsReplicat</a>

---

##### `rest_admin_credentials_input`<sup>Optional</sup> <a name="rest_admin_credentials_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.restAdminCredentialsInput"></a>

```python
rest_admin_credentials_input: DatabaseMigrationMigrationHubDetailsRestAdminCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials">DatabaseMigrationMigrationHubDetailsRestAdminCredentials</a>

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `vault_id_input`<sup>Optional</sup> <a name="vault_id_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.vaultIdInput"></a>

```python
vault_id_input: str
```

- *Type:* str

---

##### `acceptable_lag`<sup>Required</sup> <a name="acceptable_lag" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.acceptableLag"></a>

```python
acceptable_lag: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compute_id`<sup>Required</sup> <a name="compute_id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.computeId"></a>

```python
compute_id: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseMigrationMigrationHubDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails">DatabaseMigrationMigrationHubDetails</a>

---


### DatabaseMigrationMigrationHubDetailsReplicatOutputReference <a name="DatabaseMigrationMigrationHubDetailsReplicatOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.resetPerformanceProfile">reset_performance_profile</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_performance_profile` <a name="reset_performance_profile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.resetPerformanceProfile"></a>

```python
def reset_performance_profile() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.performanceProfileInput">performance_profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.performanceProfile">performance_profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat">DatabaseMigrationMigrationHubDetailsReplicat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `performance_profile_input`<sup>Optional</sup> <a name="performance_profile_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.performanceProfileInput"></a>

```python
performance_profile_input: str
```

- *Type:* str

---

##### `performance_profile`<sup>Required</sup> <a name="performance_profile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.performanceProfile"></a>

```python
performance_profile: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseMigrationMigrationHubDetailsReplicat
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat">DatabaseMigrationMigrationHubDetailsReplicat</a>

---


### DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference <a name="DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials">DatabaseMigrationMigrationHubDetailsRestAdminCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseMigrationMigrationHubDetailsRestAdminCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials">DatabaseMigrationMigrationHubDetailsRestAdminCredentials</a>

---


### DatabaseMigrationMigrationIncludeObjectsList <a name="DatabaseMigrationMigrationIncludeObjectsList" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseMigrationMigrationIncludeObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects">DatabaseMigrationMigrationIncludeObjects</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatabaseMigrationMigrationIncludeObjects]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects">DatabaseMigrationMigrationIncludeObjects</a>]]

---


### DatabaseMigrationMigrationIncludeObjectsOutputReference <a name="DatabaseMigrationMigrationIncludeObjectsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resetIsOmitExcludedTableFromReplication">reset_is_omit_excluded_table_from_replication</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resetOwner">reset_owner</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resetSchema">reset_schema</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_omit_excluded_table_from_replication` <a name="reset_is_omit_excluded_table_from_replication" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resetIsOmitExcludedTableFromReplication"></a>

```python
def reset_is_omit_excluded_table_from_replication() -> None
```

##### `reset_owner` <a name="reset_owner" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resetOwner"></a>

```python
def reset_owner() -> None
```

##### `reset_schema` <a name="reset_schema" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resetSchema"></a>

```python
def reset_schema() -> None
```

##### `reset_type` <a name="reset_type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.isOmitExcludedTableFromReplicationInput">is_omit_excluded_table_from_replication_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.objectInput">object_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.isOmitExcludedTableFromReplication">is_omit_excluded_table_from_replication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects">DatabaseMigrationMigrationIncludeObjects</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_omit_excluded_table_from_replication_input`<sup>Optional</sup> <a name="is_omit_excluded_table_from_replication_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.isOmitExcludedTableFromReplicationInput"></a>

```python
is_omit_excluded_table_from_replication_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `object_input`<sup>Optional</sup> <a name="object_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.objectInput"></a>

```python
object_input: str
```

- *Type:* str

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `is_omit_excluded_table_from_replication`<sup>Required</sup> <a name="is_omit_excluded_table_from_replication" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.isOmitExcludedTableFromReplication"></a>

```python
is_omit_excluded_table_from_replication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseMigrationMigrationIncludeObjects]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects">DatabaseMigrationMigrationIncludeObjects</a>]

---


### DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference <a name="DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetEstimate">reset_estimate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetExcludeParameters">reset_exclude_parameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetExportParallelismDegree">reset_export_parallelism_degree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetImportParallelismDegree">reset_import_parallelism_degree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetIsCluster">reset_is_cluster</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetTableExistsAction">reset_table_exists_action</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_estimate` <a name="reset_estimate" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetEstimate"></a>

```python
def reset_estimate() -> None
```

##### `reset_exclude_parameters` <a name="reset_exclude_parameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetExcludeParameters"></a>

```python
def reset_exclude_parameters() -> None
```

##### `reset_export_parallelism_degree` <a name="reset_export_parallelism_degree" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetExportParallelismDegree"></a>

```python
def reset_export_parallelism_degree() -> None
```

##### `reset_import_parallelism_degree` <a name="reset_import_parallelism_degree" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetImportParallelismDegree"></a>

```python
def reset_import_parallelism_degree() -> None
```

##### `reset_is_cluster` <a name="reset_is_cluster" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetIsCluster"></a>

```python
def reset_is_cluster() -> None
```

##### `reset_table_exists_action` <a name="reset_table_exists_action" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetTableExistsAction"></a>

```python
def reset_table_exists_action() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.estimateInput">estimate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.excludeParametersInput">exclude_parameters_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.exportParallelismDegreeInput">export_parallelism_degree_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.importParallelismDegreeInput">import_parallelism_degree_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.isClusterInput">is_cluster_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.tableExistsActionInput">table_exists_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.estimate">estimate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.excludeParameters">exclude_parameters</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.exportParallelismDegree">export_parallelism_degree</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.importParallelismDegree">import_parallelism_degree</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.isCluster">is_cluster</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.tableExistsAction">table_exists_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `estimate_input`<sup>Optional</sup> <a name="estimate_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.estimateInput"></a>

```python
estimate_input: str
```

- *Type:* str

---

##### `exclude_parameters_input`<sup>Optional</sup> <a name="exclude_parameters_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.excludeParametersInput"></a>

```python
exclude_parameters_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `export_parallelism_degree_input`<sup>Optional</sup> <a name="export_parallelism_degree_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.exportParallelismDegreeInput"></a>

```python
export_parallelism_degree_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `import_parallelism_degree_input`<sup>Optional</sup> <a name="import_parallelism_degree_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.importParallelismDegreeInput"></a>

```python
import_parallelism_degree_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_cluster_input`<sup>Optional</sup> <a name="is_cluster_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.isClusterInput"></a>

```python
is_cluster_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `table_exists_action_input`<sup>Optional</sup> <a name="table_exists_action_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.tableExistsActionInput"></a>

```python
table_exists_action_input: str
```

- *Type:* str

---

##### `estimate`<sup>Required</sup> <a name="estimate" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.estimate"></a>

```python
estimate: str
```

- *Type:* str

---

##### `exclude_parameters`<sup>Required</sup> <a name="exclude_parameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.excludeParameters"></a>

```python
exclude_parameters: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `export_parallelism_degree`<sup>Required</sup> <a name="export_parallelism_degree" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.exportParallelismDegree"></a>

```python
export_parallelism_degree: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `import_parallelism_degree`<sup>Required</sup> <a name="import_parallelism_degree" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.importParallelismDegree"></a>

```python
import_parallelism_degree: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_cluster`<sup>Required</sup> <a name="is_cluster" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.isCluster"></a>

```python
is_cluster: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `table_exists_action`<sup>Required</sup> <a name="table_exists_action" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.tableExistsAction"></a>

```python
table_exists_action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters</a>

---


### DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference <a name="DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_path` <a name="reset_path" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject</a>

---


### DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference <a name="DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_path` <a name="reset_path" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject</a>

---


### DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList <a name="DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps">DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps">DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps</a>]]

---


### DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference <a name="DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resetNewValue">reset_new_value</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resetOldValue">reset_old_value</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_new_value` <a name="reset_new_value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resetNewValue"></a>

```python
def reset_new_value() -> None
```

##### `reset_old_value` <a name="reset_old_value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resetOldValue"></a>

```python
def reset_old_value() -> None
```

##### `reset_type` <a name="reset_type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.newValueInput">new_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.oldValueInput">old_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.newValue">new_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.oldValue">old_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps">DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `new_value_input`<sup>Optional</sup> <a name="new_value_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.newValueInput"></a>

```python
new_value_input: str
```

- *Type:* str

---

##### `old_value_input`<sup>Optional</sup> <a name="old_value_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.oldValueInput"></a>

```python
old_value_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `new_value`<sup>Required</sup> <a name="new_value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.newValue"></a>

```python
new_value: str
```

- *Type:* str

---

##### `old_value`<sup>Required</sup> <a name="old_value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.oldValue"></a>

```python
old_value: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps">DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps</a>]

---


### DatabaseMigrationMigrationInitialLoadSettingsOutputReference <a name="DatabaseMigrationMigrationInitialLoadSettingsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putDataPumpParameters">put_data_pump_parameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putExportDirectoryObject">put_export_directory_object</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putImportDirectoryObject">put_import_directory_object</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putMetadataRemaps">put_metadata_remaps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putTablespaceDetails">put_tablespace_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetCompatibility">reset_compatibility</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetDataPumpParameters">reset_data_pump_parameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetExportDirectoryObject">reset_export_directory_object</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetHandleGrantErrors">reset_handle_grant_errors</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetImportDirectoryObject">reset_import_directory_object</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetIsConsistent">reset_is_consistent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetIsIgnoreExistingObjects">reset_is_ignore_existing_objects</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetIsTzUtc">reset_is_tz_utc</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetMetadataRemaps">reset_metadata_remaps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetPrimaryKeyCompatibility">reset_primary_key_compatibility</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetTablespaceDetails">reset_tablespace_details</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_data_pump_parameters` <a name="put_data_pump_parameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putDataPumpParameters"></a>

```python
def put_data_pump_parameters(
  estimate: str = None,
  exclude_parameters: typing.List[str] = None,
  export_parallelism_degree: typing.Union[int, float] = None,
  import_parallelism_degree: typing.Union[int, float] = None,
  is_cluster: typing.Union[bool, IResolvable] = None,
  table_exists_action: str = None
) -> None
```

###### `estimate`<sup>Optional</sup> <a name="estimate" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putDataPumpParameters.parameter.estimate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#estimate DatabaseMigrationMigration#estimate}.

---

###### `exclude_parameters`<sup>Optional</sup> <a name="exclude_parameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putDataPumpParameters.parameter.excludeParameters"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#exclude_parameters DatabaseMigrationMigration#exclude_parameters}.

---

###### `export_parallelism_degree`<sup>Optional</sup> <a name="export_parallelism_degree" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putDataPumpParameters.parameter.exportParallelismDegree"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#export_parallelism_degree DatabaseMigrationMigration#export_parallelism_degree}.

---

###### `import_parallelism_degree`<sup>Optional</sup> <a name="import_parallelism_degree" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putDataPumpParameters.parameter.importParallelismDegree"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#import_parallelism_degree DatabaseMigrationMigration#import_parallelism_degree}.

---

###### `is_cluster`<sup>Optional</sup> <a name="is_cluster" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putDataPumpParameters.parameter.isCluster"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_cluster DatabaseMigrationMigration#is_cluster}.

---

###### `table_exists_action`<sup>Optional</sup> <a name="table_exists_action" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putDataPumpParameters.parameter.tableExistsAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#table_exists_action DatabaseMigrationMigration#table_exists_action}.

---

##### `put_export_directory_object` <a name="put_export_directory_object" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putExportDirectoryObject"></a>

```python
def put_export_directory_object(
  name: str = None,
  path: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putExportDirectoryObject.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}.

---

###### `path`<sup>Optional</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putExportDirectoryObject.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#path DatabaseMigrationMigration#path}.

---

##### `put_import_directory_object` <a name="put_import_directory_object" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putImportDirectoryObject"></a>

```python
def put_import_directory_object(
  name: str = None,
  path: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putImportDirectoryObject.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}.

---

###### `path`<sup>Optional</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putImportDirectoryObject.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#path DatabaseMigrationMigration#path}.

---

##### `put_metadata_remaps` <a name="put_metadata_remaps" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putMetadataRemaps"></a>

```python
def put_metadata_remaps(
  value: typing.Union[IResolvable, typing.List[DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putMetadataRemaps.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps">DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps</a>]]

---

##### `put_tablespace_details` <a name="put_tablespace_details" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putTablespaceDetails"></a>

```python
def put_tablespace_details(
  target_type: str,
  block_size_in_kbs: str = None,
  extend_size_in_mbs: typing.Union[int, float] = None,
  is_auto_create: typing.Union[bool, IResolvable] = None,
  is_big_file: typing.Union[bool, IResolvable] = None,
  remap_target: str = None
) -> None
```

###### `target_type`<sup>Required</sup> <a name="target_type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putTablespaceDetails.parameter.targetType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#target_type DatabaseMigrationMigration#target_type}.

---

###### `block_size_in_kbs`<sup>Optional</sup> <a name="block_size_in_kbs" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putTablespaceDetails.parameter.blockSizeInKbs"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#block_size_in_kbs DatabaseMigrationMigration#block_size_in_kbs}.

---

###### `extend_size_in_mbs`<sup>Optional</sup> <a name="extend_size_in_mbs" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putTablespaceDetails.parameter.extendSizeInMbs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#extend_size_in_mbs DatabaseMigrationMigration#extend_size_in_mbs}.

---

###### `is_auto_create`<sup>Optional</sup> <a name="is_auto_create" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putTablespaceDetails.parameter.isAutoCreate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_auto_create DatabaseMigrationMigration#is_auto_create}.

---

###### `is_big_file`<sup>Optional</sup> <a name="is_big_file" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putTablespaceDetails.parameter.isBigFile"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_big_file DatabaseMigrationMigration#is_big_file}.

---

###### `remap_target`<sup>Optional</sup> <a name="remap_target" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putTablespaceDetails.parameter.remapTarget"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#remap_target DatabaseMigrationMigration#remap_target}.

---

##### `reset_compatibility` <a name="reset_compatibility" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetCompatibility"></a>

```python
def reset_compatibility() -> None
```

##### `reset_data_pump_parameters` <a name="reset_data_pump_parameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetDataPumpParameters"></a>

```python
def reset_data_pump_parameters() -> None
```

##### `reset_export_directory_object` <a name="reset_export_directory_object" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetExportDirectoryObject"></a>

```python
def reset_export_directory_object() -> None
```

##### `reset_handle_grant_errors` <a name="reset_handle_grant_errors" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetHandleGrantErrors"></a>

```python
def reset_handle_grant_errors() -> None
```

##### `reset_import_directory_object` <a name="reset_import_directory_object" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetImportDirectoryObject"></a>

```python
def reset_import_directory_object() -> None
```

##### `reset_is_consistent` <a name="reset_is_consistent" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetIsConsistent"></a>

```python
def reset_is_consistent() -> None
```

##### `reset_is_ignore_existing_objects` <a name="reset_is_ignore_existing_objects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetIsIgnoreExistingObjects"></a>

```python
def reset_is_ignore_existing_objects() -> None
```

##### `reset_is_tz_utc` <a name="reset_is_tz_utc" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetIsTzUtc"></a>

```python
def reset_is_tz_utc() -> None
```

##### `reset_metadata_remaps` <a name="reset_metadata_remaps" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetMetadataRemaps"></a>

```python
def reset_metadata_remaps() -> None
```

##### `reset_primary_key_compatibility` <a name="reset_primary_key_compatibility" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetPrimaryKeyCompatibility"></a>

```python
def reset_primary_key_compatibility() -> None
```

##### `reset_tablespace_details` <a name="reset_tablespace_details" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetTablespaceDetails"></a>

```python
def reset_tablespace_details() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.dataPumpParameters">data_pump_parameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.exportDirectoryObject">export_directory_object</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.importDirectoryObject">import_directory_object</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.metadataRemaps">metadata_remaps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList">DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.tablespaceDetails">tablespace_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.compatibilityInput">compatibility_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.dataPumpParametersInput">data_pump_parameters_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.exportDirectoryObjectInput">export_directory_object_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.handleGrantErrorsInput">handle_grant_errors_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.importDirectoryObjectInput">import_directory_object_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isConsistentInput">is_consistent_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isIgnoreExistingObjectsInput">is_ignore_existing_objects_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isTzUtcInput">is_tz_utc_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.jobModeInput">job_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.metadataRemapsInput">metadata_remaps_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps">DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.primaryKeyCompatibilityInput">primary_key_compatibility_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.tablespaceDetailsInput">tablespace_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.compatibility">compatibility</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.handleGrantErrors">handle_grant_errors</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isConsistent">is_consistent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isIgnoreExistingObjects">is_ignore_existing_objects</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isTzUtc">is_tz_utc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.jobMode">job_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.primaryKeyCompatibility">primary_key_compatibility</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings">DatabaseMigrationMigrationInitialLoadSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_pump_parameters`<sup>Required</sup> <a name="data_pump_parameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.dataPumpParameters"></a>

```python
data_pump_parameters: DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference</a>

---

##### `export_directory_object`<sup>Required</sup> <a name="export_directory_object" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.exportDirectoryObject"></a>

```python
export_directory_object: DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference</a>

---

##### `import_directory_object`<sup>Required</sup> <a name="import_directory_object" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.importDirectoryObject"></a>

```python
import_directory_object: DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference</a>

---

##### `metadata_remaps`<sup>Required</sup> <a name="metadata_remaps" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.metadataRemaps"></a>

```python
metadata_remaps: DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList">DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList</a>

---

##### `tablespace_details`<sup>Required</sup> <a name="tablespace_details" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.tablespaceDetails"></a>

```python
tablespace_details: DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference</a>

---

##### `compatibility_input`<sup>Optional</sup> <a name="compatibility_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.compatibilityInput"></a>

```python
compatibility_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_pump_parameters_input`<sup>Optional</sup> <a name="data_pump_parameters_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.dataPumpParametersInput"></a>

```python
data_pump_parameters_input: DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters</a>

---

##### `export_directory_object_input`<sup>Optional</sup> <a name="export_directory_object_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.exportDirectoryObjectInput"></a>

```python
export_directory_object_input: DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject</a>

---

##### `handle_grant_errors_input`<sup>Optional</sup> <a name="handle_grant_errors_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.handleGrantErrorsInput"></a>

```python
handle_grant_errors_input: str
```

- *Type:* str

---

##### `import_directory_object_input`<sup>Optional</sup> <a name="import_directory_object_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.importDirectoryObjectInput"></a>

```python
import_directory_object_input: DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject</a>

---

##### `is_consistent_input`<sup>Optional</sup> <a name="is_consistent_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isConsistentInput"></a>

```python
is_consistent_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_ignore_existing_objects_input`<sup>Optional</sup> <a name="is_ignore_existing_objects_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isIgnoreExistingObjectsInput"></a>

```python
is_ignore_existing_objects_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_tz_utc_input`<sup>Optional</sup> <a name="is_tz_utc_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isTzUtcInput"></a>

```python
is_tz_utc_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `job_mode_input`<sup>Optional</sup> <a name="job_mode_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.jobModeInput"></a>

```python
job_mode_input: str
```

- *Type:* str

---

##### `metadata_remaps_input`<sup>Optional</sup> <a name="metadata_remaps_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.metadataRemapsInput"></a>

```python
metadata_remaps_input: typing.Union[IResolvable, typing.List[DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps">DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps</a>]]

---

##### `primary_key_compatibility_input`<sup>Optional</sup> <a name="primary_key_compatibility_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.primaryKeyCompatibilityInput"></a>

```python
primary_key_compatibility_input: str
```

- *Type:* str

---

##### `tablespace_details_input`<sup>Optional</sup> <a name="tablespace_details_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.tablespaceDetailsInput"></a>

```python
tablespace_details_input: DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails</a>

---

##### `compatibility`<sup>Required</sup> <a name="compatibility" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.compatibility"></a>

```python
compatibility: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `handle_grant_errors`<sup>Required</sup> <a name="handle_grant_errors" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.handleGrantErrors"></a>

```python
handle_grant_errors: str
```

- *Type:* str

---

##### `is_consistent`<sup>Required</sup> <a name="is_consistent" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isConsistent"></a>

```python
is_consistent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_ignore_existing_objects`<sup>Required</sup> <a name="is_ignore_existing_objects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isIgnoreExistingObjects"></a>

```python
is_ignore_existing_objects: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_tz_utc`<sup>Required</sup> <a name="is_tz_utc" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isTzUtc"></a>

```python
is_tz_utc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `job_mode`<sup>Required</sup> <a name="job_mode" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.jobMode"></a>

```python
job_mode: str
```

- *Type:* str

---

##### `primary_key_compatibility`<sup>Required</sup> <a name="primary_key_compatibility" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.primaryKeyCompatibility"></a>

```python
primary_key_compatibility: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseMigrationMigrationInitialLoadSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings">DatabaseMigrationMigrationInitialLoadSettings</a>

---


### DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference <a name="DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetBlockSizeInKbs">reset_block_size_in_kbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetExtendSizeInMbs">reset_extend_size_in_mbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetIsAutoCreate">reset_is_auto_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetIsBigFile">reset_is_big_file</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetRemapTarget">reset_remap_target</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_block_size_in_kbs` <a name="reset_block_size_in_kbs" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetBlockSizeInKbs"></a>

```python
def reset_block_size_in_kbs() -> None
```

##### `reset_extend_size_in_mbs` <a name="reset_extend_size_in_mbs" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetExtendSizeInMbs"></a>

```python
def reset_extend_size_in_mbs() -> None
```

##### `reset_is_auto_create` <a name="reset_is_auto_create" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetIsAutoCreate"></a>

```python
def reset_is_auto_create() -> None
```

##### `reset_is_big_file` <a name="reset_is_big_file" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetIsBigFile"></a>

```python
def reset_is_big_file() -> None
```

##### `reset_remap_target` <a name="reset_remap_target" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetRemapTarget"></a>

```python
def reset_remap_target() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.blockSizeInKbsInput">block_size_in_kbs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.extendSizeInMbsInput">extend_size_in_mbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isAutoCreateInput">is_auto_create_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isBigFileInput">is_big_file_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.remapTargetInput">remap_target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.targetTypeInput">target_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.blockSizeInKbs">block_size_in_kbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.extendSizeInMbs">extend_size_in_mbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isAutoCreate">is_auto_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isBigFile">is_big_file</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.remapTarget">remap_target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.targetType">target_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_size_in_kbs_input`<sup>Optional</sup> <a name="block_size_in_kbs_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.blockSizeInKbsInput"></a>

```python
block_size_in_kbs_input: str
```

- *Type:* str

---

##### `extend_size_in_mbs_input`<sup>Optional</sup> <a name="extend_size_in_mbs_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.extendSizeInMbsInput"></a>

```python
extend_size_in_mbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_auto_create_input`<sup>Optional</sup> <a name="is_auto_create_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isAutoCreateInput"></a>

```python
is_auto_create_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_big_file_input`<sup>Optional</sup> <a name="is_big_file_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isBigFileInput"></a>

```python
is_big_file_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `remap_target_input`<sup>Optional</sup> <a name="remap_target_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.remapTargetInput"></a>

```python
remap_target_input: str
```

- *Type:* str

---

##### `target_type_input`<sup>Optional</sup> <a name="target_type_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.targetTypeInput"></a>

```python
target_type_input: str
```

- *Type:* str

---

##### `block_size_in_kbs`<sup>Required</sup> <a name="block_size_in_kbs" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.blockSizeInKbs"></a>

```python
block_size_in_kbs: str
```

- *Type:* str

---

##### `extend_size_in_mbs`<sup>Required</sup> <a name="extend_size_in_mbs" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.extendSizeInMbs"></a>

```python
extend_size_in_mbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_auto_create`<sup>Required</sup> <a name="is_auto_create" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isAutoCreate"></a>

```python
is_auto_create: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_big_file`<sup>Required</sup> <a name="is_big_file" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isBigFile"></a>

```python
is_big_file: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `remap_target`<sup>Required</sup> <a name="remap_target" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.remapTarget"></a>

```python
remap_target: str
```

- *Type:* str

---

##### `target_type`<sup>Required</sup> <a name="target_type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.targetType"></a>

```python
target_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails</a>

---


### DatabaseMigrationMigrationTimeoutsOutputReference <a name="DatabaseMigrationMigrationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_migration_migration

databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts">DatabaseMigrationMigrationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseMigrationMigrationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts">DatabaseMigrationMigrationTimeouts</a>]

---



