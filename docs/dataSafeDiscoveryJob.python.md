# `dataSafeDiscoveryJob` Submodule <a name="`dataSafeDiscoveryJob` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeDiscoveryJob <a name="DataSafeDiscoveryJob" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job oci_data_safe_discovery_job}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_discovery_job

dataSafeDiscoveryJob.DataSafeDiscoveryJob(
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
  sensitive_data_model_id: str,
  defined_tags: typing.Mapping[str] = None,
  discovery_type: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_app_defined_relation_discovery_enabled: typing.Union[bool, IResolvable] = None,
  is_include_all_schemas: typing.Union[bool, IResolvable] = None,
  is_include_all_sensitive_types: typing.Union[bool, IResolvable] = None,
  is_sample_data_collection_enabled: typing.Union[bool, IResolvable] = None,
  schemas_for_discovery: typing.List[str] = None,
  sensitive_type_ids_for_discovery: typing.List[str] = None,
  tables_for_discovery: typing.Union[IResolvable, typing.List[DataSafeDiscoveryJobTablesForDiscovery]] = None,
  timeouts: DataSafeDiscoveryJobTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#compartment_id DataSafeDiscoveryJob#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.sensitiveDataModelId">sensitive_data_model_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#sensitive_data_model_id DataSafeDiscoveryJob#sensitive_data_model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#defined_tags DataSafeDiscoveryJob#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.discoveryType">discovery_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#discovery_type DataSafeDiscoveryJob#discovery_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#display_name DataSafeDiscoveryJob#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#freeform_tags DataSafeDiscoveryJob#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#id DataSafeDiscoveryJob#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.isAppDefinedRelationDiscoveryEnabled">is_app_defined_relation_discovery_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_app_defined_relation_discovery_enabled DataSafeDiscoveryJob#is_app_defined_relation_discovery_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.isIncludeAllSchemas">is_include_all_schemas</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_include_all_schemas DataSafeDiscoveryJob#is_include_all_schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.isIncludeAllSensitiveTypes">is_include_all_sensitive_types</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_include_all_sensitive_types DataSafeDiscoveryJob#is_include_all_sensitive_types}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.isSampleDataCollectionEnabled">is_sample_data_collection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_sample_data_collection_enabled DataSafeDiscoveryJob#is_sample_data_collection_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.schemasForDiscovery">schemas_for_discovery</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#schemas_for_discovery DataSafeDiscoveryJob#schemas_for_discovery}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.sensitiveTypeIdsForDiscovery">sensitive_type_ids_for_discovery</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#sensitive_type_ids_for_discovery DataSafeDiscoveryJob#sensitive_type_ids_for_discovery}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.tablesForDiscovery">tables_for_discovery</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery">DataSafeDiscoveryJobTablesForDiscovery</a>]]</code> | tables_for_discovery block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts">DataSafeDiscoveryJobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#compartment_id DataSafeDiscoveryJob#compartment_id}.

---

##### `sensitive_data_model_id`<sup>Required</sup> <a name="sensitive_data_model_id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.sensitiveDataModelId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#sensitive_data_model_id DataSafeDiscoveryJob#sensitive_data_model_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#defined_tags DataSafeDiscoveryJob#defined_tags}.

---

##### `discovery_type`<sup>Optional</sup> <a name="discovery_type" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.discoveryType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#discovery_type DataSafeDiscoveryJob#discovery_type}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#display_name DataSafeDiscoveryJob#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#freeform_tags DataSafeDiscoveryJob#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#id DataSafeDiscoveryJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_app_defined_relation_discovery_enabled`<sup>Optional</sup> <a name="is_app_defined_relation_discovery_enabled" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.isAppDefinedRelationDiscoveryEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_app_defined_relation_discovery_enabled DataSafeDiscoveryJob#is_app_defined_relation_discovery_enabled}.

---

##### `is_include_all_schemas`<sup>Optional</sup> <a name="is_include_all_schemas" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.isIncludeAllSchemas"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_include_all_schemas DataSafeDiscoveryJob#is_include_all_schemas}.

---

##### `is_include_all_sensitive_types`<sup>Optional</sup> <a name="is_include_all_sensitive_types" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.isIncludeAllSensitiveTypes"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_include_all_sensitive_types DataSafeDiscoveryJob#is_include_all_sensitive_types}.

---

##### `is_sample_data_collection_enabled`<sup>Optional</sup> <a name="is_sample_data_collection_enabled" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.isSampleDataCollectionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_sample_data_collection_enabled DataSafeDiscoveryJob#is_sample_data_collection_enabled}.

---

##### `schemas_for_discovery`<sup>Optional</sup> <a name="schemas_for_discovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.schemasForDiscovery"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#schemas_for_discovery DataSafeDiscoveryJob#schemas_for_discovery}.

---

##### `sensitive_type_ids_for_discovery`<sup>Optional</sup> <a name="sensitive_type_ids_for_discovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.sensitiveTypeIdsForDiscovery"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#sensitive_type_ids_for_discovery DataSafeDiscoveryJob#sensitive_type_ids_for_discovery}.

---

##### `tables_for_discovery`<sup>Optional</sup> <a name="tables_for_discovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.tablesForDiscovery"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery">DataSafeDiscoveryJobTablesForDiscovery</a>]]

tables_for_discovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#tables_for_discovery DataSafeDiscoveryJob#tables_for_discovery}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts">DataSafeDiscoveryJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#timeouts DataSafeDiscoveryJob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.putTablesForDiscovery">put_tables_for_discovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetDiscoveryType">reset_discovery_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetIsAppDefinedRelationDiscoveryEnabled">reset_is_app_defined_relation_discovery_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetIsIncludeAllSchemas">reset_is_include_all_schemas</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetIsIncludeAllSensitiveTypes">reset_is_include_all_sensitive_types</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetIsSampleDataCollectionEnabled">reset_is_sample_data_collection_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetSchemasForDiscovery">reset_schemas_for_discovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetSensitiveTypeIdsForDiscovery">reset_sensitive_type_ids_for_discovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetTablesForDiscovery">reset_tables_for_discovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tables_for_discovery` <a name="put_tables_for_discovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.putTablesForDiscovery"></a>

```python
def put_tables_for_discovery(
  value: typing.Union[IResolvable, typing.List[DataSafeDiscoveryJobTablesForDiscovery]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.putTablesForDiscovery.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery">DataSafeDiscoveryJobTablesForDiscovery</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#create DataSafeDiscoveryJob#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#delete DataSafeDiscoveryJob#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#update DataSafeDiscoveryJob#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_discovery_type` <a name="reset_discovery_type" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetDiscoveryType"></a>

```python
def reset_discovery_type() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_app_defined_relation_discovery_enabled` <a name="reset_is_app_defined_relation_discovery_enabled" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetIsAppDefinedRelationDiscoveryEnabled"></a>

```python
def reset_is_app_defined_relation_discovery_enabled() -> None
```

##### `reset_is_include_all_schemas` <a name="reset_is_include_all_schemas" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetIsIncludeAllSchemas"></a>

```python
def reset_is_include_all_schemas() -> None
```

##### `reset_is_include_all_sensitive_types` <a name="reset_is_include_all_sensitive_types" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetIsIncludeAllSensitiveTypes"></a>

```python
def reset_is_include_all_sensitive_types() -> None
```

##### `reset_is_sample_data_collection_enabled` <a name="reset_is_sample_data_collection_enabled" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetIsSampleDataCollectionEnabled"></a>

```python
def reset_is_sample_data_collection_enabled() -> None
```

##### `reset_schemas_for_discovery` <a name="reset_schemas_for_discovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetSchemasForDiscovery"></a>

```python
def reset_schemas_for_discovery() -> None
```

##### `reset_sensitive_type_ids_for_discovery` <a name="reset_sensitive_type_ids_for_discovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetSensitiveTypeIdsForDiscovery"></a>

```python
def reset_sensitive_type_ids_for_discovery() -> None
```

##### `reset_tables_for_discovery` <a name="reset_tables_for_discovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetTablesForDiscovery"></a>

```python
def reset_tables_for_discovery() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataSafeDiscoveryJob resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_discovery_job

dataSafeDiscoveryJob.DataSafeDiscoveryJob.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_discovery_job

dataSafeDiscoveryJob.DataSafeDiscoveryJob.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_discovery_job

dataSafeDiscoveryJob.DataSafeDiscoveryJob.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_discovery_job

dataSafeDiscoveryJob.DataSafeDiscoveryJob.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataSafeDiscoveryJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataSafeDiscoveryJob to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataSafeDiscoveryJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeDiscoveryJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.tablesForDiscovery">tables_for_discovery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList">DataSafeDiscoveryJobTablesForDiscoveryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.timeFinished">time_finished</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference">DataSafeDiscoveryJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.timeStarted">time_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalColumnsScanned">total_columns_scanned</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalDeletedSensitiveColumns">total_deleted_sensitive_columns</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalModifiedSensitiveColumns">total_modified_sensitive_columns</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalNewSensitiveColumns">total_new_sensitive_columns</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalObjectsScanned">total_objects_scanned</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalSchemasScanned">total_schemas_scanned</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.discoveryTypeInput">discovery_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isAppDefinedRelationDiscoveryEnabledInput">is_app_defined_relation_discovery_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isIncludeAllSchemasInput">is_include_all_schemas_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isIncludeAllSensitiveTypesInput">is_include_all_sensitive_types_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isSampleDataCollectionEnabledInput">is_sample_data_collection_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.schemasForDiscoveryInput">schemas_for_discovery_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.sensitiveDataModelIdInput">sensitive_data_model_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.sensitiveTypeIdsForDiscoveryInput">sensitive_type_ids_for_discovery_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.tablesForDiscoveryInput">tables_for_discovery_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery">DataSafeDiscoveryJobTablesForDiscovery</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts">DataSafeDiscoveryJobTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.discoveryType">discovery_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isAppDefinedRelationDiscoveryEnabled">is_app_defined_relation_discovery_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isIncludeAllSchemas">is_include_all_schemas</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isIncludeAllSensitiveTypes">is_include_all_sensitive_types</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isSampleDataCollectionEnabled">is_sample_data_collection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.schemasForDiscovery">schemas_for_discovery</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.sensitiveDataModelId">sensitive_data_model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.sensitiveTypeIdsForDiscovery">sensitive_type_ids_for_discovery</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `tables_for_discovery`<sup>Required</sup> <a name="tables_for_discovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.tablesForDiscovery"></a>

```python
tables_for_discovery: DataSafeDiscoveryJobTablesForDiscoveryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList">DataSafeDiscoveryJobTablesForDiscoveryList</a>

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `time_finished`<sup>Required</sup> <a name="time_finished" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.timeFinished"></a>

```python
time_finished: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.timeouts"></a>

```python
timeouts: DataSafeDiscoveryJobTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference">DataSafeDiscoveryJobTimeoutsOutputReference</a>

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

---

##### `total_columns_scanned`<sup>Required</sup> <a name="total_columns_scanned" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalColumnsScanned"></a>

```python
total_columns_scanned: str
```

- *Type:* str

---

##### `total_deleted_sensitive_columns`<sup>Required</sup> <a name="total_deleted_sensitive_columns" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalDeletedSensitiveColumns"></a>

```python
total_deleted_sensitive_columns: str
```

- *Type:* str

---

##### `total_modified_sensitive_columns`<sup>Required</sup> <a name="total_modified_sensitive_columns" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalModifiedSensitiveColumns"></a>

```python
total_modified_sensitive_columns: str
```

- *Type:* str

---

##### `total_new_sensitive_columns`<sup>Required</sup> <a name="total_new_sensitive_columns" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalNewSensitiveColumns"></a>

```python
total_new_sensitive_columns: str
```

- *Type:* str

---

##### `total_objects_scanned`<sup>Required</sup> <a name="total_objects_scanned" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalObjectsScanned"></a>

```python
total_objects_scanned: str
```

- *Type:* str

---

##### `total_schemas_scanned`<sup>Required</sup> <a name="total_schemas_scanned" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalSchemasScanned"></a>

```python
total_schemas_scanned: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `discovery_type_input`<sup>Optional</sup> <a name="discovery_type_input" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.discoveryTypeInput"></a>

```python
discovery_type_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_app_defined_relation_discovery_enabled_input`<sup>Optional</sup> <a name="is_app_defined_relation_discovery_enabled_input" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isAppDefinedRelationDiscoveryEnabledInput"></a>

```python
is_app_defined_relation_discovery_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_include_all_schemas_input`<sup>Optional</sup> <a name="is_include_all_schemas_input" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isIncludeAllSchemasInput"></a>

```python
is_include_all_schemas_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_include_all_sensitive_types_input`<sup>Optional</sup> <a name="is_include_all_sensitive_types_input" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isIncludeAllSensitiveTypesInput"></a>

```python
is_include_all_sensitive_types_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_sample_data_collection_enabled_input`<sup>Optional</sup> <a name="is_sample_data_collection_enabled_input" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isSampleDataCollectionEnabledInput"></a>

```python
is_sample_data_collection_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `schemas_for_discovery_input`<sup>Optional</sup> <a name="schemas_for_discovery_input" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.schemasForDiscoveryInput"></a>

```python
schemas_for_discovery_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sensitive_data_model_id_input`<sup>Optional</sup> <a name="sensitive_data_model_id_input" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.sensitiveDataModelIdInput"></a>

```python
sensitive_data_model_id_input: str
```

- *Type:* str

---

##### `sensitive_type_ids_for_discovery_input`<sup>Optional</sup> <a name="sensitive_type_ids_for_discovery_input" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.sensitiveTypeIdsForDiscoveryInput"></a>

```python
sensitive_type_ids_for_discovery_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tables_for_discovery_input`<sup>Optional</sup> <a name="tables_for_discovery_input" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.tablesForDiscoveryInput"></a>

```python
tables_for_discovery_input: typing.Union[IResolvable, typing.List[DataSafeDiscoveryJobTablesForDiscovery]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery">DataSafeDiscoveryJobTablesForDiscovery</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataSafeDiscoveryJobTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts">DataSafeDiscoveryJobTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `discovery_type`<sup>Required</sup> <a name="discovery_type" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.discoveryType"></a>

```python
discovery_type: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_app_defined_relation_discovery_enabled`<sup>Required</sup> <a name="is_app_defined_relation_discovery_enabled" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isAppDefinedRelationDiscoveryEnabled"></a>

```python
is_app_defined_relation_discovery_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_include_all_schemas`<sup>Required</sup> <a name="is_include_all_schemas" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isIncludeAllSchemas"></a>

```python
is_include_all_schemas: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_include_all_sensitive_types`<sup>Required</sup> <a name="is_include_all_sensitive_types" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isIncludeAllSensitiveTypes"></a>

```python
is_include_all_sensitive_types: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_sample_data_collection_enabled`<sup>Required</sup> <a name="is_sample_data_collection_enabled" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isSampleDataCollectionEnabled"></a>

```python
is_sample_data_collection_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `schemas_for_discovery`<sup>Required</sup> <a name="schemas_for_discovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.schemasForDiscovery"></a>

```python
schemas_for_discovery: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sensitive_data_model_id`<sup>Required</sup> <a name="sensitive_data_model_id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.sensitiveDataModelId"></a>

```python
sensitive_data_model_id: str
```

- *Type:* str

---

##### `sensitive_type_ids_for_discovery`<sup>Required</sup> <a name="sensitive_type_ids_for_discovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.sensitiveTypeIdsForDiscovery"></a>

```python
sensitive_type_ids_for_discovery: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeDiscoveryJobConfig <a name="DataSafeDiscoveryJobConfig" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_discovery_job

dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  sensitive_data_model_id: str,
  defined_tags: typing.Mapping[str] = None,
  discovery_type: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_app_defined_relation_discovery_enabled: typing.Union[bool, IResolvable] = None,
  is_include_all_schemas: typing.Union[bool, IResolvable] = None,
  is_include_all_sensitive_types: typing.Union[bool, IResolvable] = None,
  is_sample_data_collection_enabled: typing.Union[bool, IResolvable] = None,
  schemas_for_discovery: typing.List[str] = None,
  sensitive_type_ids_for_discovery: typing.List[str] = None,
  tables_for_discovery: typing.Union[IResolvable, typing.List[DataSafeDiscoveryJobTablesForDiscovery]] = None,
  timeouts: DataSafeDiscoveryJobTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#compartment_id DataSafeDiscoveryJob#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.sensitiveDataModelId">sensitive_data_model_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#sensitive_data_model_id DataSafeDiscoveryJob#sensitive_data_model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#defined_tags DataSafeDiscoveryJob#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.discoveryType">discovery_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#discovery_type DataSafeDiscoveryJob#discovery_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#display_name DataSafeDiscoveryJob#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#freeform_tags DataSafeDiscoveryJob#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#id DataSafeDiscoveryJob#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.isAppDefinedRelationDiscoveryEnabled">is_app_defined_relation_discovery_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_app_defined_relation_discovery_enabled DataSafeDiscoveryJob#is_app_defined_relation_discovery_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.isIncludeAllSchemas">is_include_all_schemas</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_include_all_schemas DataSafeDiscoveryJob#is_include_all_schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.isIncludeAllSensitiveTypes">is_include_all_sensitive_types</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_include_all_sensitive_types DataSafeDiscoveryJob#is_include_all_sensitive_types}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.isSampleDataCollectionEnabled">is_sample_data_collection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_sample_data_collection_enabled DataSafeDiscoveryJob#is_sample_data_collection_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.schemasForDiscovery">schemas_for_discovery</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#schemas_for_discovery DataSafeDiscoveryJob#schemas_for_discovery}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.sensitiveTypeIdsForDiscovery">sensitive_type_ids_for_discovery</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#sensitive_type_ids_for_discovery DataSafeDiscoveryJob#sensitive_type_ids_for_discovery}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.tablesForDiscovery">tables_for_discovery</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery">DataSafeDiscoveryJobTablesForDiscovery</a>]]</code> | tables_for_discovery block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts">DataSafeDiscoveryJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#compartment_id DataSafeDiscoveryJob#compartment_id}.

---

##### `sensitive_data_model_id`<sup>Required</sup> <a name="sensitive_data_model_id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.sensitiveDataModelId"></a>

```python
sensitive_data_model_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#sensitive_data_model_id DataSafeDiscoveryJob#sensitive_data_model_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#defined_tags DataSafeDiscoveryJob#defined_tags}.

---

##### `discovery_type`<sup>Optional</sup> <a name="discovery_type" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.discoveryType"></a>

```python
discovery_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#discovery_type DataSafeDiscoveryJob#discovery_type}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#display_name DataSafeDiscoveryJob#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#freeform_tags DataSafeDiscoveryJob#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#id DataSafeDiscoveryJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_app_defined_relation_discovery_enabled`<sup>Optional</sup> <a name="is_app_defined_relation_discovery_enabled" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.isAppDefinedRelationDiscoveryEnabled"></a>

```python
is_app_defined_relation_discovery_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_app_defined_relation_discovery_enabled DataSafeDiscoveryJob#is_app_defined_relation_discovery_enabled}.

---

##### `is_include_all_schemas`<sup>Optional</sup> <a name="is_include_all_schemas" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.isIncludeAllSchemas"></a>

```python
is_include_all_schemas: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_include_all_schemas DataSafeDiscoveryJob#is_include_all_schemas}.

---

##### `is_include_all_sensitive_types`<sup>Optional</sup> <a name="is_include_all_sensitive_types" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.isIncludeAllSensitiveTypes"></a>

```python
is_include_all_sensitive_types: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_include_all_sensitive_types DataSafeDiscoveryJob#is_include_all_sensitive_types}.

---

##### `is_sample_data_collection_enabled`<sup>Optional</sup> <a name="is_sample_data_collection_enabled" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.isSampleDataCollectionEnabled"></a>

```python
is_sample_data_collection_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_sample_data_collection_enabled DataSafeDiscoveryJob#is_sample_data_collection_enabled}.

---

##### `schemas_for_discovery`<sup>Optional</sup> <a name="schemas_for_discovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.schemasForDiscovery"></a>

```python
schemas_for_discovery: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#schemas_for_discovery DataSafeDiscoveryJob#schemas_for_discovery}.

---

##### `sensitive_type_ids_for_discovery`<sup>Optional</sup> <a name="sensitive_type_ids_for_discovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.sensitiveTypeIdsForDiscovery"></a>

```python
sensitive_type_ids_for_discovery: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#sensitive_type_ids_for_discovery DataSafeDiscoveryJob#sensitive_type_ids_for_discovery}.

---

##### `tables_for_discovery`<sup>Optional</sup> <a name="tables_for_discovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.tablesForDiscovery"></a>

```python
tables_for_discovery: typing.Union[IResolvable, typing.List[DataSafeDiscoveryJobTablesForDiscovery]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery">DataSafeDiscoveryJobTablesForDiscovery</a>]]

tables_for_discovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#tables_for_discovery DataSafeDiscoveryJob#tables_for_discovery}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.timeouts"></a>

```python
timeouts: DataSafeDiscoveryJobTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts">DataSafeDiscoveryJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#timeouts DataSafeDiscoveryJob#timeouts}

---

### DataSafeDiscoveryJobTablesForDiscovery <a name="DataSafeDiscoveryJobTablesForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_discovery_job

dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery(
  schema_name: str,
  table_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery.property.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#schema_name DataSafeDiscoveryJob#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery.property.tableNames">table_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#table_names DataSafeDiscoveryJob#table_names}. |

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#schema_name DataSafeDiscoveryJob#schema_name}.

---

##### `table_names`<sup>Optional</sup> <a name="table_names" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery.property.tableNames"></a>

```python
table_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#table_names DataSafeDiscoveryJob#table_names}.

---

### DataSafeDiscoveryJobTimeouts <a name="DataSafeDiscoveryJobTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_discovery_job

dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#create DataSafeDiscoveryJob#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#delete DataSafeDiscoveryJob#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#update DataSafeDiscoveryJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#create DataSafeDiscoveryJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#delete DataSafeDiscoveryJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#update DataSafeDiscoveryJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeDiscoveryJobTablesForDiscoveryList <a name="DataSafeDiscoveryJobTablesForDiscoveryList" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_discovery_job

dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSafeDiscoveryJobTablesForDiscoveryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery">DataSafeDiscoveryJobTablesForDiscovery</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataSafeDiscoveryJobTablesForDiscovery]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery">DataSafeDiscoveryJobTablesForDiscovery</a>]]

---


### DataSafeDiscoveryJobTablesForDiscoveryOutputReference <a name="DataSafeDiscoveryJobTablesForDiscoveryOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_discovery_job

dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.resetTableNames">reset_table_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_table_names` <a name="reset_table_names" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.resetTableNames"></a>

```python
def reset_table_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.tableNamesInput">table_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.tableNames">table_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery">DataSafeDiscoveryJobTablesForDiscovery</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `table_names_input`<sup>Optional</sup> <a name="table_names_input" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.tableNamesInput"></a>

```python
table_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `table_names`<sup>Required</sup> <a name="table_names" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.tableNames"></a>

```python
table_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataSafeDiscoveryJobTablesForDiscovery]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery">DataSafeDiscoveryJobTablesForDiscovery</a>]

---


### DataSafeDiscoveryJobTimeoutsOutputReference <a name="DataSafeDiscoveryJobTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_discovery_job

dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts">DataSafeDiscoveryJobTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataSafeDiscoveryJobTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts">DataSafeDiscoveryJobTimeouts</a>]

---



