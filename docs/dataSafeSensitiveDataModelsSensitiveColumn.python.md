# `dataSafeSensitiveDataModelsSensitiveColumn` Submodule <a name="`dataSafeSensitiveDataModelsSensitiveColumn` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeSensitiveDataModelsSensitiveColumn <a name="DataSafeSensitiveDataModelsSensitiveColumn" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column oci_data_safe_sensitive_data_models_sensitive_column}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_sensitive_data_models_sensitive_column

dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  column_name: str,
  object: str,
  schema_name: str,
  sensitive_data_model_id: str,
  app_defined_child_column_keys: typing.List[str] = None,
  app_name: str = None,
  data_type: str = None,
  db_defined_child_column_keys: typing.List[str] = None,
  id: str = None,
  object_type: str = None,
  parent_column_keys: typing.List[str] = None,
  relation_type: str = None,
  sensitive_type_id: str = None,
  status: str = None,
  timeouts: DataSafeSensitiveDataModelsSensitiveColumnTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.columnName">column_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#column_name DataSafeSensitiveDataModelsSensitiveColumn#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.object">object</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#object DataSafeSensitiveDataModelsSensitiveColumn#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#schema_name DataSafeSensitiveDataModelsSensitiveColumn#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.sensitiveDataModelId">sensitive_data_model_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#sensitive_data_model_id DataSafeSensitiveDataModelsSensitiveColumn#sensitive_data_model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.appDefinedChildColumnKeys">app_defined_child_column_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#app_defined_child_column_keys DataSafeSensitiveDataModelsSensitiveColumn#app_defined_child_column_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.appName">app_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#app_name DataSafeSensitiveDataModelsSensitiveColumn#app_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.dataType">data_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#data_type DataSafeSensitiveDataModelsSensitiveColumn#data_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.dbDefinedChildColumnKeys">db_defined_child_column_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#db_defined_child_column_keys DataSafeSensitiveDataModelsSensitiveColumn#db_defined_child_column_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#id DataSafeSensitiveDataModelsSensitiveColumn#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.objectType">object_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#object_type DataSafeSensitiveDataModelsSensitiveColumn#object_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.parentColumnKeys">parent_column_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#parent_column_keys DataSafeSensitiveDataModelsSensitiveColumn#parent_column_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.relationType">relation_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#relation_type DataSafeSensitiveDataModelsSensitiveColumn#relation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.sensitiveTypeId">sensitive_type_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#sensitive_type_id DataSafeSensitiveDataModelsSensitiveColumn#sensitive_type_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#status DataSafeSensitiveDataModelsSensitiveColumn#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeouts">DataSafeSensitiveDataModelsSensitiveColumnTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.columnName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#column_name DataSafeSensitiveDataModelsSensitiveColumn#column_name}.

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.object"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#object DataSafeSensitiveDataModelsSensitiveColumn#object}.

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.schemaName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#schema_name DataSafeSensitiveDataModelsSensitiveColumn#schema_name}.

---

##### `sensitive_data_model_id`<sup>Required</sup> <a name="sensitive_data_model_id" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.sensitiveDataModelId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#sensitive_data_model_id DataSafeSensitiveDataModelsSensitiveColumn#sensitive_data_model_id}.

---

##### `app_defined_child_column_keys`<sup>Optional</sup> <a name="app_defined_child_column_keys" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.appDefinedChildColumnKeys"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#app_defined_child_column_keys DataSafeSensitiveDataModelsSensitiveColumn#app_defined_child_column_keys}.

---

##### `app_name`<sup>Optional</sup> <a name="app_name" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.appName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#app_name DataSafeSensitiveDataModelsSensitiveColumn#app_name}.

---

##### `data_type`<sup>Optional</sup> <a name="data_type" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.dataType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#data_type DataSafeSensitiveDataModelsSensitiveColumn#data_type}.

---

##### `db_defined_child_column_keys`<sup>Optional</sup> <a name="db_defined_child_column_keys" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.dbDefinedChildColumnKeys"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#db_defined_child_column_keys DataSafeSensitiveDataModelsSensitiveColumn#db_defined_child_column_keys}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#id DataSafeSensitiveDataModelsSensitiveColumn#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `object_type`<sup>Optional</sup> <a name="object_type" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.objectType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#object_type DataSafeSensitiveDataModelsSensitiveColumn#object_type}.

---

##### `parent_column_keys`<sup>Optional</sup> <a name="parent_column_keys" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.parentColumnKeys"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#parent_column_keys DataSafeSensitiveDataModelsSensitiveColumn#parent_column_keys}.

---

##### `relation_type`<sup>Optional</sup> <a name="relation_type" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.relationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#relation_type DataSafeSensitiveDataModelsSensitiveColumn#relation_type}.

---

##### `sensitive_type_id`<sup>Optional</sup> <a name="sensitive_type_id" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.sensitiveTypeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#sensitive_type_id DataSafeSensitiveDataModelsSensitiveColumn#sensitive_type_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#status DataSafeSensitiveDataModelsSensitiveColumn#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeouts">DataSafeSensitiveDataModelsSensitiveColumnTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#timeouts DataSafeSensitiveDataModelsSensitiveColumn#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetAppDefinedChildColumnKeys">reset_app_defined_child_column_keys</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetAppName">reset_app_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetDataType">reset_data_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetDbDefinedChildColumnKeys">reset_db_defined_child_column_keys</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetObjectType">reset_object_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetParentColumnKeys">reset_parent_column_keys</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetRelationType">reset_relation_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetSensitiveTypeId">reset_sensitive_type_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#create DataSafeSensitiveDataModelsSensitiveColumn#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#delete DataSafeSensitiveDataModelsSensitiveColumn#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#update DataSafeSensitiveDataModelsSensitiveColumn#update}.

---

##### `reset_app_defined_child_column_keys` <a name="reset_app_defined_child_column_keys" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetAppDefinedChildColumnKeys"></a>

```python
def reset_app_defined_child_column_keys() -> None
```

##### `reset_app_name` <a name="reset_app_name" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetAppName"></a>

```python
def reset_app_name() -> None
```

##### `reset_data_type` <a name="reset_data_type" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetDataType"></a>

```python
def reset_data_type() -> None
```

##### `reset_db_defined_child_column_keys` <a name="reset_db_defined_child_column_keys" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetDbDefinedChildColumnKeys"></a>

```python
def reset_db_defined_child_column_keys() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_object_type` <a name="reset_object_type" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetObjectType"></a>

```python
def reset_object_type() -> None
```

##### `reset_parent_column_keys` <a name="reset_parent_column_keys" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetParentColumnKeys"></a>

```python
def reset_parent_column_keys() -> None
```

##### `reset_relation_type` <a name="reset_relation_type" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetRelationType"></a>

```python
def reset_relation_type() -> None
```

##### `reset_sensitive_type_id` <a name="reset_sensitive_type_id" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetSensitiveTypeId"></a>

```python
def reset_sensitive_type_id() -> None
```

##### `reset_status` <a name="reset_status" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataSafeSensitiveDataModelsSensitiveColumn resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_sensitive_data_models_sensitive_column

dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_sensitive_data_models_sensitive_column

dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_sensitive_data_models_sensitive_column

dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_sensitive_data_models_sensitive_column

dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataSafeSensitiveDataModelsSensitiveColumn resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataSafeSensitiveDataModelsSensitiveColumn to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataSafeSensitiveDataModelsSensitiveColumn that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeSensitiveDataModelsSensitiveColumn to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.columnGroups">column_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.estimatedDataValueCount">estimated_data_value_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.sampleDataValues">sample_data_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference">DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.appDefinedChildColumnKeysInput">app_defined_child_column_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.appNameInput">app_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.columnNameInput">column_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.dataTypeInput">data_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.dbDefinedChildColumnKeysInput">db_defined_child_column_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.objectInput">object_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.objectTypeInput">object_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.parentColumnKeysInput">parent_column_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.relationTypeInput">relation_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveDataModelIdInput">sensitive_data_model_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveTypeIdInput">sensitive_type_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeouts">DataSafeSensitiveDataModelsSensitiveColumnTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.appDefinedChildColumnKeys">app_defined_child_column_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.appName">app_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.columnName">column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.dbDefinedChildColumnKeys">db_defined_child_column_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.objectType">object_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.parentColumnKeys">parent_column_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.relationType">relation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveDataModelId">sensitive_data_model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveTypeId">sensitive_type_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `column_groups`<sup>Required</sup> <a name="column_groups" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.columnGroups"></a>

```python
column_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `estimated_data_value_count`<sup>Required</sup> <a name="estimated_data_value_count" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.estimatedDataValueCount"></a>

```python
estimated_data_value_count: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `sample_data_values`<sup>Required</sup> <a name="sample_data_values" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.sampleDataValues"></a>

```python
sample_data_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.timeouts"></a>

```python
timeouts: DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference">DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `app_defined_child_column_keys_input`<sup>Optional</sup> <a name="app_defined_child_column_keys_input" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.appDefinedChildColumnKeysInput"></a>

```python
app_defined_child_column_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `app_name_input`<sup>Optional</sup> <a name="app_name_input" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.appNameInput"></a>

```python
app_name_input: str
```

- *Type:* str

---

##### `column_name_input`<sup>Optional</sup> <a name="column_name_input" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.columnNameInput"></a>

```python
column_name_input: str
```

- *Type:* str

---

##### `data_type_input`<sup>Optional</sup> <a name="data_type_input" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.dataTypeInput"></a>

```python
data_type_input: str
```

- *Type:* str

---

##### `db_defined_child_column_keys_input`<sup>Optional</sup> <a name="db_defined_child_column_keys_input" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.dbDefinedChildColumnKeysInput"></a>

```python
db_defined_child_column_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `object_input`<sup>Optional</sup> <a name="object_input" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.objectInput"></a>

```python
object_input: str
```

- *Type:* str

---

##### `object_type_input`<sup>Optional</sup> <a name="object_type_input" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.objectTypeInput"></a>

```python
object_type_input: str
```

- *Type:* str

---

##### `parent_column_keys_input`<sup>Optional</sup> <a name="parent_column_keys_input" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.parentColumnKeysInput"></a>

```python
parent_column_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `relation_type_input`<sup>Optional</sup> <a name="relation_type_input" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.relationTypeInput"></a>

```python
relation_type_input: str
```

- *Type:* str

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `sensitive_data_model_id_input`<sup>Optional</sup> <a name="sensitive_data_model_id_input" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveDataModelIdInput"></a>

```python
sensitive_data_model_id_input: str
```

- *Type:* str

---

##### `sensitive_type_id_input`<sup>Optional</sup> <a name="sensitive_type_id_input" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveTypeIdInput"></a>

```python
sensitive_type_id_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataSafeSensitiveDataModelsSensitiveColumnTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeouts">DataSafeSensitiveDataModelsSensitiveColumnTimeouts</a>]

---

##### `app_defined_child_column_keys`<sup>Required</sup> <a name="app_defined_child_column_keys" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.appDefinedChildColumnKeys"></a>

```python
app_defined_child_column_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `app_name`<sup>Required</sup> <a name="app_name" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.appName"></a>

```python
app_name: str
```

- *Type:* str

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `db_defined_child_column_keys`<sup>Required</sup> <a name="db_defined_child_column_keys" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.dbDefinedChildColumnKeys"></a>

```python
db_defined_child_column_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

---

##### `parent_column_keys`<sup>Required</sup> <a name="parent_column_keys" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.parentColumnKeys"></a>

```python
parent_column_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `relation_type`<sup>Required</sup> <a name="relation_type" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.relationType"></a>

```python
relation_type: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `sensitive_data_model_id`<sup>Required</sup> <a name="sensitive_data_model_id" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveDataModelId"></a>

```python
sensitive_data_model_id: str
```

- *Type:* str

---

##### `sensitive_type_id`<sup>Required</sup> <a name="sensitive_type_id" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveTypeId"></a>

```python
sensitive_type_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeSensitiveDataModelsSensitiveColumnConfig <a name="DataSafeSensitiveDataModelsSensitiveColumnConfig" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_sensitive_data_models_sensitive_column

dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  column_name: str,
  object: str,
  schema_name: str,
  sensitive_data_model_id: str,
  app_defined_child_column_keys: typing.List[str] = None,
  app_name: str = None,
  data_type: str = None,
  db_defined_child_column_keys: typing.List[str] = None,
  id: str = None,
  object_type: str = None,
  parent_column_keys: typing.List[str] = None,
  relation_type: str = None,
  sensitive_type_id: str = None,
  status: str = None,
  timeouts: DataSafeSensitiveDataModelsSensitiveColumnTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.columnName">column_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#column_name DataSafeSensitiveDataModelsSensitiveColumn#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.object">object</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#object DataSafeSensitiveDataModelsSensitiveColumn#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#schema_name DataSafeSensitiveDataModelsSensitiveColumn#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.sensitiveDataModelId">sensitive_data_model_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#sensitive_data_model_id DataSafeSensitiveDataModelsSensitiveColumn#sensitive_data_model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.appDefinedChildColumnKeys">app_defined_child_column_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#app_defined_child_column_keys DataSafeSensitiveDataModelsSensitiveColumn#app_defined_child_column_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.appName">app_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#app_name DataSafeSensitiveDataModelsSensitiveColumn#app_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.dataType">data_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#data_type DataSafeSensitiveDataModelsSensitiveColumn#data_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.dbDefinedChildColumnKeys">db_defined_child_column_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#db_defined_child_column_keys DataSafeSensitiveDataModelsSensitiveColumn#db_defined_child_column_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#id DataSafeSensitiveDataModelsSensitiveColumn#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.objectType">object_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#object_type DataSafeSensitiveDataModelsSensitiveColumn#object_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.parentColumnKeys">parent_column_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#parent_column_keys DataSafeSensitiveDataModelsSensitiveColumn#parent_column_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.relationType">relation_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#relation_type DataSafeSensitiveDataModelsSensitiveColumn#relation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.sensitiveTypeId">sensitive_type_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#sensitive_type_id DataSafeSensitiveDataModelsSensitiveColumn#sensitive_type_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#status DataSafeSensitiveDataModelsSensitiveColumn#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeouts">DataSafeSensitiveDataModelsSensitiveColumnTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#column_name DataSafeSensitiveDataModelsSensitiveColumn#column_name}.

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.object"></a>

```python
object: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#object DataSafeSensitiveDataModelsSensitiveColumn#object}.

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#schema_name DataSafeSensitiveDataModelsSensitiveColumn#schema_name}.

---

##### `sensitive_data_model_id`<sup>Required</sup> <a name="sensitive_data_model_id" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.sensitiveDataModelId"></a>

```python
sensitive_data_model_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#sensitive_data_model_id DataSafeSensitiveDataModelsSensitiveColumn#sensitive_data_model_id}.

---

##### `app_defined_child_column_keys`<sup>Optional</sup> <a name="app_defined_child_column_keys" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.appDefinedChildColumnKeys"></a>

```python
app_defined_child_column_keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#app_defined_child_column_keys DataSafeSensitiveDataModelsSensitiveColumn#app_defined_child_column_keys}.

---

##### `app_name`<sup>Optional</sup> <a name="app_name" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.appName"></a>

```python
app_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#app_name DataSafeSensitiveDataModelsSensitiveColumn#app_name}.

---

##### `data_type`<sup>Optional</sup> <a name="data_type" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#data_type DataSafeSensitiveDataModelsSensitiveColumn#data_type}.

---

##### `db_defined_child_column_keys`<sup>Optional</sup> <a name="db_defined_child_column_keys" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.dbDefinedChildColumnKeys"></a>

```python
db_defined_child_column_keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#db_defined_child_column_keys DataSafeSensitiveDataModelsSensitiveColumn#db_defined_child_column_keys}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#id DataSafeSensitiveDataModelsSensitiveColumn#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `object_type`<sup>Optional</sup> <a name="object_type" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#object_type DataSafeSensitiveDataModelsSensitiveColumn#object_type}.

---

##### `parent_column_keys`<sup>Optional</sup> <a name="parent_column_keys" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.parentColumnKeys"></a>

```python
parent_column_keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#parent_column_keys DataSafeSensitiveDataModelsSensitiveColumn#parent_column_keys}.

---

##### `relation_type`<sup>Optional</sup> <a name="relation_type" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.relationType"></a>

```python
relation_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#relation_type DataSafeSensitiveDataModelsSensitiveColumn#relation_type}.

---

##### `sensitive_type_id`<sup>Optional</sup> <a name="sensitive_type_id" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.sensitiveTypeId"></a>

```python
sensitive_type_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#sensitive_type_id DataSafeSensitiveDataModelsSensitiveColumn#sensitive_type_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#status DataSafeSensitiveDataModelsSensitiveColumn#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.timeouts"></a>

```python
timeouts: DataSafeSensitiveDataModelsSensitiveColumnTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeouts">DataSafeSensitiveDataModelsSensitiveColumnTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#timeouts DataSafeSensitiveDataModelsSensitiveColumn#timeouts}

---

### DataSafeSensitiveDataModelsSensitiveColumnTimeouts <a name="DataSafeSensitiveDataModelsSensitiveColumnTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_sensitive_data_models_sensitive_column

dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#create DataSafeSensitiveDataModelsSensitiveColumn#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#delete DataSafeSensitiveDataModelsSensitiveColumn#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#update DataSafeSensitiveDataModelsSensitiveColumn#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#create DataSafeSensitiveDataModelsSensitiveColumn#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#delete DataSafeSensitiveDataModelsSensitiveColumn#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#update DataSafeSensitiveDataModelsSensitiveColumn#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference <a name="DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_sensitive_data_models_sensitive_column

dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeouts">DataSafeSensitiveDataModelsSensitiveColumnTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataSafeSensitiveDataModelsSensitiveColumnTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeouts">DataSafeSensitiveDataModelsSensitiveColumnTimeouts</a>]

---



