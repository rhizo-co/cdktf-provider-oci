# `dataLabelingServiceDataset` Submodule <a name="`dataLabelingServiceDataset` Submodule" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLabelingServiceDataset <a name="DataLabelingServiceDataset" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset oci_data_labeling_service_dataset}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_labeling_service_dataset

dataLabelingServiceDataset.DataLabelingServiceDataset(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  annotation_format: str,
  compartment_id: str,
  dataset_format_details: DataLabelingServiceDatasetDatasetFormatDetails,
  dataset_source_details: DataLabelingServiceDatasetDatasetSourceDetails,
  label_set: DataLabelingServiceDatasetLabelSet,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  initial_import_dataset_configuration: DataLabelingServiceDatasetInitialImportDatasetConfiguration = None,
  initial_record_generation_configuration: DataLabelingServiceDatasetInitialRecordGenerationConfiguration = None,
  labeling_instructions: str = None,
  timeouts: DataLabelingServiceDatasetTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.annotationFormat">annotation_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#annotation_format DataLabelingServiceDataset#annotation_format}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#compartment_id DataLabelingServiceDataset#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.datasetFormatDetails">dataset_format_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails">DataLabelingServiceDatasetDatasetFormatDetails</a></code> | dataset_format_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.datasetSourceDetails">dataset_source_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails">DataLabelingServiceDatasetDatasetSourceDetails</a></code> | dataset_source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.labelSet">label_set</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSet">DataLabelingServiceDatasetLabelSet</a></code> | label_set block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#defined_tags DataLabelingServiceDataset#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#description DataLabelingServiceDataset#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#display_name DataLabelingServiceDataset#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#freeform_tags DataLabelingServiceDataset#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#id DataLabelingServiceDataset#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.initialImportDatasetConfiguration">initial_import_dataset_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration">DataLabelingServiceDatasetInitialImportDatasetConfiguration</a></code> | initial_import_dataset_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.initialRecordGenerationConfiguration">initial_record_generation_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfiguration">DataLabelingServiceDatasetInitialRecordGenerationConfiguration</a></code> | initial_record_generation_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.labelingInstructions">labeling_instructions</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#labeling_instructions DataLabelingServiceDataset#labeling_instructions}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts">DataLabelingServiceDatasetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `annotation_format`<sup>Required</sup> <a name="annotation_format" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.annotationFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#annotation_format DataLabelingServiceDataset#annotation_format}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#compartment_id DataLabelingServiceDataset#compartment_id}.

---

##### `dataset_format_details`<sup>Required</sup> <a name="dataset_format_details" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.datasetFormatDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails">DataLabelingServiceDatasetDatasetFormatDetails</a>

dataset_format_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#dataset_format_details DataLabelingServiceDataset#dataset_format_details}

---

##### `dataset_source_details`<sup>Required</sup> <a name="dataset_source_details" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.datasetSourceDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails">DataLabelingServiceDatasetDatasetSourceDetails</a>

dataset_source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#dataset_source_details DataLabelingServiceDataset#dataset_source_details}

---

##### `label_set`<sup>Required</sup> <a name="label_set" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.labelSet"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSet">DataLabelingServiceDatasetLabelSet</a>

label_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#label_set DataLabelingServiceDataset#label_set}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#defined_tags DataLabelingServiceDataset#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#description DataLabelingServiceDataset#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#display_name DataLabelingServiceDataset#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#freeform_tags DataLabelingServiceDataset#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#id DataLabelingServiceDataset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initial_import_dataset_configuration`<sup>Optional</sup> <a name="initial_import_dataset_configuration" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.initialImportDatasetConfiguration"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration">DataLabelingServiceDatasetInitialImportDatasetConfiguration</a>

initial_import_dataset_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#initial_import_dataset_configuration DataLabelingServiceDataset#initial_import_dataset_configuration}

---

##### `initial_record_generation_configuration`<sup>Optional</sup> <a name="initial_record_generation_configuration" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.initialRecordGenerationConfiguration"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfiguration">DataLabelingServiceDatasetInitialRecordGenerationConfiguration</a>

initial_record_generation_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#initial_record_generation_configuration DataLabelingServiceDataset#initial_record_generation_configuration}

---

##### `labeling_instructions`<sup>Optional</sup> <a name="labeling_instructions" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.labelingInstructions"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#labeling_instructions DataLabelingServiceDataset#labeling_instructions}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts">DataLabelingServiceDatasetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#timeouts DataLabelingServiceDataset#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putDatasetFormatDetails">put_dataset_format_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putDatasetSourceDetails">put_dataset_source_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putInitialImportDatasetConfiguration">put_initial_import_dataset_configuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putInitialRecordGenerationConfiguration">put_initial_record_generation_configuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putLabelSet">put_label_set</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetInitialImportDatasetConfiguration">reset_initial_import_dataset_configuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetInitialRecordGenerationConfiguration">reset_initial_record_generation_configuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetLabelingInstructions">reset_labeling_instructions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_dataset_format_details` <a name="put_dataset_format_details" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putDatasetFormatDetails"></a>

```python
def put_dataset_format_details(
  format_type: str,
  text_file_type_metadata: DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata = None
) -> None
```

###### `format_type`<sup>Required</sup> <a name="format_type" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putDatasetFormatDetails.parameter.formatType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#format_type DataLabelingServiceDataset#format_type}.

---

###### `text_file_type_metadata`<sup>Optional</sup> <a name="text_file_type_metadata" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putDatasetFormatDetails.parameter.textFileTypeMetadata"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata">DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata</a>

text_file_type_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#text_file_type_metadata DataLabelingServiceDataset#text_file_type_metadata}

---

##### `put_dataset_source_details` <a name="put_dataset_source_details" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putDatasetSourceDetails"></a>

```python
def put_dataset_source_details(
  bucket: str,
  namespace: str,
  source_type: str,
  prefix: str = None
) -> None
```

###### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putDatasetSourceDetails.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#bucket DataLabelingServiceDataset#bucket}.

---

###### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putDatasetSourceDetails.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#namespace DataLabelingServiceDataset#namespace}.

---

###### `source_type`<sup>Required</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putDatasetSourceDetails.parameter.sourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#source_type DataLabelingServiceDataset#source_type}.

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putDatasetSourceDetails.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#prefix DataLabelingServiceDataset#prefix}.

---

##### `put_initial_import_dataset_configuration` <a name="put_initial_import_dataset_configuration" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putInitialImportDatasetConfiguration"></a>

```python
def put_initial_import_dataset_configuration(
  import_format: DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat,
  import_metadata_path: DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath
) -> None
```

###### `import_format`<sup>Required</sup> <a name="import_format" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putInitialImportDatasetConfiguration.parameter.importFormat"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat</a>

import_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#import_format DataLabelingServiceDataset#import_format}

---

###### `import_metadata_path`<sup>Required</sup> <a name="import_metadata_path" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putInitialImportDatasetConfiguration.parameter.importMetadataPath"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath</a>

import_metadata_path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#import_metadata_path DataLabelingServiceDataset#import_metadata_path}

---

##### `put_initial_record_generation_configuration` <a name="put_initial_record_generation_configuration" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putInitialRecordGenerationConfiguration"></a>

```python
def put_initial_record_generation_configuration() -> None
```

##### `put_label_set` <a name="put_label_set" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putLabelSet"></a>

```python
def put_label_set(
  items: typing.Union[IResolvable, typing.List[DataLabelingServiceDatasetLabelSetItems]]
) -> None
```

###### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putLabelSet.parameter.items"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItems">DataLabelingServiceDatasetLabelSetItems</a>]]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#items DataLabelingServiceDataset#items}

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#create DataLabelingServiceDataset#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#delete DataLabelingServiceDataset#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#update DataLabelingServiceDataset#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_initial_import_dataset_configuration` <a name="reset_initial_import_dataset_configuration" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetInitialImportDatasetConfiguration"></a>

```python
def reset_initial_import_dataset_configuration() -> None
```

##### `reset_initial_record_generation_configuration` <a name="reset_initial_record_generation_configuration" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetInitialRecordGenerationConfiguration"></a>

```python
def reset_initial_record_generation_configuration() -> None
```

##### `reset_labeling_instructions` <a name="reset_labeling_instructions" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetLabelingInstructions"></a>

```python
def reset_labeling_instructions() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataLabelingServiceDataset resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_labeling_service_dataset

dataLabelingServiceDataset.DataLabelingServiceDataset.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_labeling_service_dataset

dataLabelingServiceDataset.DataLabelingServiceDataset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_labeling_service_dataset

dataLabelingServiceDataset.DataLabelingServiceDataset.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_labeling_service_dataset

dataLabelingServiceDataset.DataLabelingServiceDataset.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataLabelingServiceDataset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataLabelingServiceDataset to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataLabelingServiceDataset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataLabelingServiceDataset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.additionalProperties">additional_properties</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.datasetFormatDetails">dataset_format_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference">DataLabelingServiceDatasetDatasetFormatDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.datasetSourceDetails">dataset_source_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference">DataLabelingServiceDatasetDatasetSourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.initialImportDatasetConfiguration">initial_import_dataset_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference">DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.initialRecordGenerationConfiguration">initial_record_generation_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference">DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.labelSet">label_set</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference">DataLabelingServiceDatasetLabelSetOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.lifecycleSubstate">lifecycle_substate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference">DataLabelingServiceDatasetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.annotationFormatInput">annotation_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.datasetFormatDetailsInput">dataset_format_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails">DataLabelingServiceDatasetDatasetFormatDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.datasetSourceDetailsInput">dataset_source_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails">DataLabelingServiceDatasetDatasetSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.initialImportDatasetConfigurationInput">initial_import_dataset_configuration_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration">DataLabelingServiceDatasetInitialImportDatasetConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.initialRecordGenerationConfigurationInput">initial_record_generation_configuration_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfiguration">DataLabelingServiceDatasetInitialRecordGenerationConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.labelingInstructionsInput">labeling_instructions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.labelSetInput">label_set_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSet">DataLabelingServiceDatasetLabelSet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts">DataLabelingServiceDatasetTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.annotationFormat">annotation_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.labelingInstructions">labeling_instructions</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `additional_properties`<sup>Required</sup> <a name="additional_properties" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.additionalProperties"></a>

```python
additional_properties: StringMap
```

- *Type:* cdktf.StringMap

---

##### `dataset_format_details`<sup>Required</sup> <a name="dataset_format_details" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.datasetFormatDetails"></a>

```python
dataset_format_details: DataLabelingServiceDatasetDatasetFormatDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference">DataLabelingServiceDatasetDatasetFormatDetailsOutputReference</a>

---

##### `dataset_source_details`<sup>Required</sup> <a name="dataset_source_details" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.datasetSourceDetails"></a>

```python
dataset_source_details: DataLabelingServiceDatasetDatasetSourceDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference">DataLabelingServiceDatasetDatasetSourceDetailsOutputReference</a>

---

##### `initial_import_dataset_configuration`<sup>Required</sup> <a name="initial_import_dataset_configuration" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.initialImportDatasetConfiguration"></a>

```python
initial_import_dataset_configuration: DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference">DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference</a>

---

##### `initial_record_generation_configuration`<sup>Required</sup> <a name="initial_record_generation_configuration" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.initialRecordGenerationConfiguration"></a>

```python
initial_record_generation_configuration: DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference">DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference</a>

---

##### `label_set`<sup>Required</sup> <a name="label_set" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.labelSet"></a>

```python
label_set: DataLabelingServiceDatasetLabelSetOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference">DataLabelingServiceDatasetLabelSetOutputReference</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `lifecycle_substate`<sup>Required</sup> <a name="lifecycle_substate" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.lifecycleSubstate"></a>

```python
lifecycle_substate: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.timeouts"></a>

```python
timeouts: DataLabelingServiceDatasetTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference">DataLabelingServiceDatasetTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `annotation_format_input`<sup>Optional</sup> <a name="annotation_format_input" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.annotationFormatInput"></a>

```python
annotation_format_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `dataset_format_details_input`<sup>Optional</sup> <a name="dataset_format_details_input" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.datasetFormatDetailsInput"></a>

```python
dataset_format_details_input: DataLabelingServiceDatasetDatasetFormatDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails">DataLabelingServiceDatasetDatasetFormatDetails</a>

---

##### `dataset_source_details_input`<sup>Optional</sup> <a name="dataset_source_details_input" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.datasetSourceDetailsInput"></a>

```python
dataset_source_details_input: DataLabelingServiceDatasetDatasetSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails">DataLabelingServiceDatasetDatasetSourceDetails</a>

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `initial_import_dataset_configuration_input`<sup>Optional</sup> <a name="initial_import_dataset_configuration_input" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.initialImportDatasetConfigurationInput"></a>

```python
initial_import_dataset_configuration_input: DataLabelingServiceDatasetInitialImportDatasetConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration">DataLabelingServiceDatasetInitialImportDatasetConfiguration</a>

---

##### `initial_record_generation_configuration_input`<sup>Optional</sup> <a name="initial_record_generation_configuration_input" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.initialRecordGenerationConfigurationInput"></a>

```python
initial_record_generation_configuration_input: DataLabelingServiceDatasetInitialRecordGenerationConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfiguration">DataLabelingServiceDatasetInitialRecordGenerationConfiguration</a>

---

##### `labeling_instructions_input`<sup>Optional</sup> <a name="labeling_instructions_input" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.labelingInstructionsInput"></a>

```python
labeling_instructions_input: str
```

- *Type:* str

---

##### `label_set_input`<sup>Optional</sup> <a name="label_set_input" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.labelSetInput"></a>

```python
label_set_input: DataLabelingServiceDatasetLabelSet
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSet">DataLabelingServiceDatasetLabelSet</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataLabelingServiceDatasetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts">DataLabelingServiceDatasetTimeouts</a>]

---

##### `annotation_format`<sup>Required</sup> <a name="annotation_format" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.annotationFormat"></a>

```python
annotation_format: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labeling_instructions`<sup>Required</sup> <a name="labeling_instructions" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.labelingInstructions"></a>

```python
labeling_instructions: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataLabelingServiceDatasetConfig <a name="DataLabelingServiceDatasetConfig" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_labeling_service_dataset

dataLabelingServiceDataset.DataLabelingServiceDatasetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  annotation_format: str,
  compartment_id: str,
  dataset_format_details: DataLabelingServiceDatasetDatasetFormatDetails,
  dataset_source_details: DataLabelingServiceDatasetDatasetSourceDetails,
  label_set: DataLabelingServiceDatasetLabelSet,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  initial_import_dataset_configuration: DataLabelingServiceDatasetInitialImportDatasetConfiguration = None,
  initial_record_generation_configuration: DataLabelingServiceDatasetInitialRecordGenerationConfiguration = None,
  labeling_instructions: str = None,
  timeouts: DataLabelingServiceDatasetTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.annotationFormat">annotation_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#annotation_format DataLabelingServiceDataset#annotation_format}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#compartment_id DataLabelingServiceDataset#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.datasetFormatDetails">dataset_format_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails">DataLabelingServiceDatasetDatasetFormatDetails</a></code> | dataset_format_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.datasetSourceDetails">dataset_source_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails">DataLabelingServiceDatasetDatasetSourceDetails</a></code> | dataset_source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.labelSet">label_set</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSet">DataLabelingServiceDatasetLabelSet</a></code> | label_set block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#defined_tags DataLabelingServiceDataset#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#description DataLabelingServiceDataset#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#display_name DataLabelingServiceDataset#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#freeform_tags DataLabelingServiceDataset#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#id DataLabelingServiceDataset#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.initialImportDatasetConfiguration">initial_import_dataset_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration">DataLabelingServiceDatasetInitialImportDatasetConfiguration</a></code> | initial_import_dataset_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.initialRecordGenerationConfiguration">initial_record_generation_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfiguration">DataLabelingServiceDatasetInitialRecordGenerationConfiguration</a></code> | initial_record_generation_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.labelingInstructions">labeling_instructions</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#labeling_instructions DataLabelingServiceDataset#labeling_instructions}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts">DataLabelingServiceDatasetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `annotation_format`<sup>Required</sup> <a name="annotation_format" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.annotationFormat"></a>

```python
annotation_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#annotation_format DataLabelingServiceDataset#annotation_format}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#compartment_id DataLabelingServiceDataset#compartment_id}.

---

##### `dataset_format_details`<sup>Required</sup> <a name="dataset_format_details" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.datasetFormatDetails"></a>

```python
dataset_format_details: DataLabelingServiceDatasetDatasetFormatDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails">DataLabelingServiceDatasetDatasetFormatDetails</a>

dataset_format_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#dataset_format_details DataLabelingServiceDataset#dataset_format_details}

---

##### `dataset_source_details`<sup>Required</sup> <a name="dataset_source_details" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.datasetSourceDetails"></a>

```python
dataset_source_details: DataLabelingServiceDatasetDatasetSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails">DataLabelingServiceDatasetDatasetSourceDetails</a>

dataset_source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#dataset_source_details DataLabelingServiceDataset#dataset_source_details}

---

##### `label_set`<sup>Required</sup> <a name="label_set" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.labelSet"></a>

```python
label_set: DataLabelingServiceDatasetLabelSet
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSet">DataLabelingServiceDatasetLabelSet</a>

label_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#label_set DataLabelingServiceDataset#label_set}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#defined_tags DataLabelingServiceDataset#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#description DataLabelingServiceDataset#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#display_name DataLabelingServiceDataset#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#freeform_tags DataLabelingServiceDataset#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#id DataLabelingServiceDataset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initial_import_dataset_configuration`<sup>Optional</sup> <a name="initial_import_dataset_configuration" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.initialImportDatasetConfiguration"></a>

```python
initial_import_dataset_configuration: DataLabelingServiceDatasetInitialImportDatasetConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration">DataLabelingServiceDatasetInitialImportDatasetConfiguration</a>

initial_import_dataset_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#initial_import_dataset_configuration DataLabelingServiceDataset#initial_import_dataset_configuration}

---

##### `initial_record_generation_configuration`<sup>Optional</sup> <a name="initial_record_generation_configuration" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.initialRecordGenerationConfiguration"></a>

```python
initial_record_generation_configuration: DataLabelingServiceDatasetInitialRecordGenerationConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfiguration">DataLabelingServiceDatasetInitialRecordGenerationConfiguration</a>

initial_record_generation_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#initial_record_generation_configuration DataLabelingServiceDataset#initial_record_generation_configuration}

---

##### `labeling_instructions`<sup>Optional</sup> <a name="labeling_instructions" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.labelingInstructions"></a>

```python
labeling_instructions: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#labeling_instructions DataLabelingServiceDataset#labeling_instructions}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.timeouts"></a>

```python
timeouts: DataLabelingServiceDatasetTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts">DataLabelingServiceDatasetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#timeouts DataLabelingServiceDataset#timeouts}

---

### DataLabelingServiceDatasetDatasetFormatDetails <a name="DataLabelingServiceDatasetDatasetFormatDetails" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_labeling_service_dataset

dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails(
  format_type: str,
  text_file_type_metadata: DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails.property.formatType">format_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#format_type DataLabelingServiceDataset#format_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails.property.textFileTypeMetadata">text_file_type_metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata">DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata</a></code> | text_file_type_metadata block. |

---

##### `format_type`<sup>Required</sup> <a name="format_type" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails.property.formatType"></a>

```python
format_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#format_type DataLabelingServiceDataset#format_type}.

---

##### `text_file_type_metadata`<sup>Optional</sup> <a name="text_file_type_metadata" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails.property.textFileTypeMetadata"></a>

```python
text_file_type_metadata: DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata">DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata</a>

text_file_type_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#text_file_type_metadata DataLabelingServiceDataset#text_file_type_metadata}

---

### DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata <a name="DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_labeling_service_dataset

dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata(
  column_index: typing.Union[int, float],
  format_type: str,
  column_delimiter: str = None,
  column_name: str = None,
  escape_character: str = None,
  line_delimiter: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata.property.columnIndex">column_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#column_index DataLabelingServiceDataset#column_index}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata.property.formatType">format_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#format_type DataLabelingServiceDataset#format_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata.property.columnDelimiter">column_delimiter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#column_delimiter DataLabelingServiceDataset#column_delimiter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata.property.columnName">column_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#column_name DataLabelingServiceDataset#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata.property.escapeCharacter">escape_character</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#escape_character DataLabelingServiceDataset#escape_character}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata.property.lineDelimiter">line_delimiter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#line_delimiter DataLabelingServiceDataset#line_delimiter}. |

---

##### `column_index`<sup>Required</sup> <a name="column_index" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata.property.columnIndex"></a>

```python
column_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#column_index DataLabelingServiceDataset#column_index}.

---

##### `format_type`<sup>Required</sup> <a name="format_type" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata.property.formatType"></a>

```python
format_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#format_type DataLabelingServiceDataset#format_type}.

---

##### `column_delimiter`<sup>Optional</sup> <a name="column_delimiter" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata.property.columnDelimiter"></a>

```python
column_delimiter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#column_delimiter DataLabelingServiceDataset#column_delimiter}.

---

##### `column_name`<sup>Optional</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#column_name DataLabelingServiceDataset#column_name}.

---

##### `escape_character`<sup>Optional</sup> <a name="escape_character" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata.property.escapeCharacter"></a>

```python
escape_character: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#escape_character DataLabelingServiceDataset#escape_character}.

---

##### `line_delimiter`<sup>Optional</sup> <a name="line_delimiter" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata.property.lineDelimiter"></a>

```python
line_delimiter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#line_delimiter DataLabelingServiceDataset#line_delimiter}.

---

### DataLabelingServiceDatasetDatasetSourceDetails <a name="DataLabelingServiceDatasetDatasetSourceDetails" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_labeling_service_dataset

dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails(
  bucket: str,
  namespace: str,
  source_type: str,
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#bucket DataLabelingServiceDataset#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#namespace DataLabelingServiceDataset#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails.property.sourceType">source_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#source_type DataLabelingServiceDataset#source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#prefix DataLabelingServiceDataset#prefix}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#bucket DataLabelingServiceDataset#bucket}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#namespace DataLabelingServiceDataset#namespace}.

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#source_type DataLabelingServiceDataset#source_type}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#prefix DataLabelingServiceDataset#prefix}.

---

### DataLabelingServiceDatasetInitialImportDatasetConfiguration <a name="DataLabelingServiceDatasetInitialImportDatasetConfiguration" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_labeling_service_dataset

dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration(
  import_format: DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat,
  import_metadata_path: DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration.property.importFormat">import_format</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat</a></code> | import_format block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration.property.importMetadataPath">import_metadata_path</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath</a></code> | import_metadata_path block. |

---

##### `import_format`<sup>Required</sup> <a name="import_format" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration.property.importFormat"></a>

```python
import_format: DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat</a>

import_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#import_format DataLabelingServiceDataset#import_format}

---

##### `import_metadata_path`<sup>Required</sup> <a name="import_metadata_path" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration.property.importMetadataPath"></a>

```python
import_metadata_path: DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath</a>

import_metadata_path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#import_metadata_path DataLabelingServiceDataset#import_metadata_path}

---

### DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat <a name="DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_labeling_service_dataset

dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat(
  name: str,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#name DataLabelingServiceDataset#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#version DataLabelingServiceDataset#version}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#name DataLabelingServiceDataset#name}.

---

##### `version`<sup>Optional</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#version DataLabelingServiceDataset#version}.

---

### DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath <a name="DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_labeling_service_dataset

dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath(
  bucket: str,
  namespace: str,
  path: str,
  source_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#bucket DataLabelingServiceDataset#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#namespace DataLabelingServiceDataset#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#path DataLabelingServiceDataset#path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath.property.sourceType">source_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#source_type DataLabelingServiceDataset#source_type}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#bucket DataLabelingServiceDataset#bucket}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#namespace DataLabelingServiceDataset#namespace}.

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#path DataLabelingServiceDataset#path}.

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#source_type DataLabelingServiceDataset#source_type}.

---

### DataLabelingServiceDatasetInitialRecordGenerationConfiguration <a name="DataLabelingServiceDatasetInitialRecordGenerationConfiguration" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_labeling_service_dataset

dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfiguration()
```


### DataLabelingServiceDatasetLabelSet <a name="DataLabelingServiceDatasetLabelSet" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSet"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSet.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_labeling_service_dataset

dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSet(
  items: typing.Union[IResolvable, typing.List[DataLabelingServiceDatasetLabelSetItems]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSet.property.items">items</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItems">DataLabelingServiceDatasetLabelSetItems</a>]]</code> | items block. |

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSet.property.items"></a>

```python
items: typing.Union[IResolvable, typing.List[DataLabelingServiceDatasetLabelSetItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItems">DataLabelingServiceDatasetLabelSetItems</a>]]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#items DataLabelingServiceDataset#items}

---

### DataLabelingServiceDatasetLabelSetItems <a name="DataLabelingServiceDatasetLabelSetItems" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_labeling_service_dataset

dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItems(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItems.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#name DataLabelingServiceDataset#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItems.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#name DataLabelingServiceDataset#name}.

---

### DataLabelingServiceDatasetTimeouts <a name="DataLabelingServiceDatasetTimeouts" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_labeling_service_dataset

dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#create DataLabelingServiceDataset#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#delete DataLabelingServiceDataset#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#update DataLabelingServiceDataset#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#create DataLabelingServiceDataset#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#delete DataLabelingServiceDataset#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#update DataLabelingServiceDataset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataLabelingServiceDatasetDatasetFormatDetailsOutputReference <a name="DataLabelingServiceDatasetDatasetFormatDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_labeling_service_dataset

dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.putTextFileTypeMetadata">put_text_file_type_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.resetTextFileTypeMetadata">reset_text_file_type_metadata</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_text_file_type_metadata` <a name="put_text_file_type_metadata" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.putTextFileTypeMetadata"></a>

```python
def put_text_file_type_metadata(
  column_index: typing.Union[int, float],
  format_type: str,
  column_delimiter: str = None,
  column_name: str = None,
  escape_character: str = None,
  line_delimiter: str = None
) -> None
```

###### `column_index`<sup>Required</sup> <a name="column_index" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.putTextFileTypeMetadata.parameter.columnIndex"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#column_index DataLabelingServiceDataset#column_index}.

---

###### `format_type`<sup>Required</sup> <a name="format_type" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.putTextFileTypeMetadata.parameter.formatType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#format_type DataLabelingServiceDataset#format_type}.

---

###### `column_delimiter`<sup>Optional</sup> <a name="column_delimiter" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.putTextFileTypeMetadata.parameter.columnDelimiter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#column_delimiter DataLabelingServiceDataset#column_delimiter}.

---

###### `column_name`<sup>Optional</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.putTextFileTypeMetadata.parameter.columnName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#column_name DataLabelingServiceDataset#column_name}.

---

###### `escape_character`<sup>Optional</sup> <a name="escape_character" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.putTextFileTypeMetadata.parameter.escapeCharacter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#escape_character DataLabelingServiceDataset#escape_character}.

---

###### `line_delimiter`<sup>Optional</sup> <a name="line_delimiter" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.putTextFileTypeMetadata.parameter.lineDelimiter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#line_delimiter DataLabelingServiceDataset#line_delimiter}.

---

##### `reset_text_file_type_metadata` <a name="reset_text_file_type_metadata" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.resetTextFileTypeMetadata"></a>

```python
def reset_text_file_type_metadata() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.textFileTypeMetadata">text_file_type_metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference">DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.formatTypeInput">format_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.textFileTypeMetadataInput">text_file_type_metadata_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata">DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.formatType">format_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails">DataLabelingServiceDatasetDatasetFormatDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `text_file_type_metadata`<sup>Required</sup> <a name="text_file_type_metadata" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.textFileTypeMetadata"></a>

```python
text_file_type_metadata: DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference">DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference</a>

---

##### `format_type_input`<sup>Optional</sup> <a name="format_type_input" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.formatTypeInput"></a>

```python
format_type_input: str
```

- *Type:* str

---

##### `text_file_type_metadata_input`<sup>Optional</sup> <a name="text_file_type_metadata_input" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.textFileTypeMetadataInput"></a>

```python
text_file_type_metadata_input: DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata">DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata</a>

---

##### `format_type`<sup>Required</sup> <a name="format_type" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.formatType"></a>

```python
format_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataLabelingServiceDatasetDatasetFormatDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails">DataLabelingServiceDatasetDatasetFormatDetails</a>

---


### DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference <a name="DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_labeling_service_dataset

dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.resetColumnDelimiter">reset_column_delimiter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.resetColumnName">reset_column_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.resetEscapeCharacter">reset_escape_character</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.resetLineDelimiter">reset_line_delimiter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_column_delimiter` <a name="reset_column_delimiter" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.resetColumnDelimiter"></a>

```python
def reset_column_delimiter() -> None
```

##### `reset_column_name` <a name="reset_column_name" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.resetColumnName"></a>

```python
def reset_column_name() -> None
```

##### `reset_escape_character` <a name="reset_escape_character" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.resetEscapeCharacter"></a>

```python
def reset_escape_character() -> None
```

##### `reset_line_delimiter` <a name="reset_line_delimiter" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.resetLineDelimiter"></a>

```python
def reset_line_delimiter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnDelimiterInput">column_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnIndexInput">column_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnNameInput">column_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.escapeCharacterInput">escape_character_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.formatTypeInput">format_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.lineDelimiterInput">line_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnDelimiter">column_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnIndex">column_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnName">column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.escapeCharacter">escape_character</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.formatType">format_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.lineDelimiter">line_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata">DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_delimiter_input`<sup>Optional</sup> <a name="column_delimiter_input" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnDelimiterInput"></a>

```python
column_delimiter_input: str
```

- *Type:* str

---

##### `column_index_input`<sup>Optional</sup> <a name="column_index_input" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnIndexInput"></a>

```python
column_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `column_name_input`<sup>Optional</sup> <a name="column_name_input" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnNameInput"></a>

```python
column_name_input: str
```

- *Type:* str

---

##### `escape_character_input`<sup>Optional</sup> <a name="escape_character_input" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.escapeCharacterInput"></a>

```python
escape_character_input: str
```

- *Type:* str

---

##### `format_type_input`<sup>Optional</sup> <a name="format_type_input" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.formatTypeInput"></a>

```python
format_type_input: str
```

- *Type:* str

---

##### `line_delimiter_input`<sup>Optional</sup> <a name="line_delimiter_input" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.lineDelimiterInput"></a>

```python
line_delimiter_input: str
```

- *Type:* str

---

##### `column_delimiter`<sup>Required</sup> <a name="column_delimiter" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnDelimiter"></a>

```python
column_delimiter: str
```

- *Type:* str

---

##### `column_index`<sup>Required</sup> <a name="column_index" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnIndex"></a>

```python
column_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

---

##### `escape_character`<sup>Required</sup> <a name="escape_character" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.escapeCharacter"></a>

```python
escape_character: str
```

- *Type:* str

---

##### `format_type`<sup>Required</sup> <a name="format_type" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.formatType"></a>

```python
format_type: str
```

- *Type:* str

---

##### `line_delimiter`<sup>Required</sup> <a name="line_delimiter" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.lineDelimiter"></a>

```python
line_delimiter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata">DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata</a>

---


### DataLabelingServiceDatasetDatasetSourceDetailsOutputReference <a name="DataLabelingServiceDatasetDatasetSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_labeling_service_dataset

dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_prefix` <a name="reset_prefix" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.sourceTypeInput">source_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails">DataLabelingServiceDatasetDatasetSourceDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `source_type_input`<sup>Optional</sup> <a name="source_type_input" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.sourceTypeInput"></a>

```python
source_type_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataLabelingServiceDatasetDatasetSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails">DataLabelingServiceDatasetDatasetSourceDetails</a>

---


### DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference <a name="DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_labeling_service_dataset

dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_version` <a name="reset_version" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.internalValue"></a>

```python
internal_value: DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat</a>

---


### DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference <a name="DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_labeling_service_dataset

dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.sourceTypeInput">source_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `source_type_input`<sup>Optional</sup> <a name="source_type_input" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.sourceTypeInput"></a>

```python
source_type_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.internalValue"></a>

```python
internal_value: DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath</a>

---


### DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference <a name="DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_labeling_service_dataset

dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.putImportFormat">put_import_format</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.putImportMetadataPath">put_import_metadata_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_import_format` <a name="put_import_format" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.putImportFormat"></a>

```python
def put_import_format(
  name: str,
  version: str = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.putImportFormat.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#name DataLabelingServiceDataset#name}.

---

###### `version`<sup>Optional</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.putImportFormat.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#version DataLabelingServiceDataset#version}.

---

##### `put_import_metadata_path` <a name="put_import_metadata_path" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.putImportMetadataPath"></a>

```python
def put_import_metadata_path(
  bucket: str,
  namespace: str,
  path: str,
  source_type: str
) -> None
```

###### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.putImportMetadataPath.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#bucket DataLabelingServiceDataset#bucket}.

---

###### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.putImportMetadataPath.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#namespace DataLabelingServiceDataset#namespace}.

---

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.putImportMetadataPath.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#path DataLabelingServiceDataset#path}.

---

###### `source_type`<sup>Required</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.putImportMetadataPath.parameter.sourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#source_type DataLabelingServiceDataset#source_type}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.importFormat">import_format</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.importMetadataPath">import_metadata_path</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.importFormatInput">import_format_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.importMetadataPathInput">import_metadata_path_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration">DataLabelingServiceDatasetInitialImportDatasetConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `import_format`<sup>Required</sup> <a name="import_format" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.importFormat"></a>

```python
import_format: DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference</a>

---

##### `import_metadata_path`<sup>Required</sup> <a name="import_metadata_path" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.importMetadataPath"></a>

```python
import_metadata_path: DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference</a>

---

##### `import_format_input`<sup>Optional</sup> <a name="import_format_input" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.importFormatInput"></a>

```python
import_format_input: DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat</a>

---

##### `import_metadata_path_input`<sup>Optional</sup> <a name="import_metadata_path_input" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.importMetadataPathInput"></a>

```python
import_metadata_path_input: DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataLabelingServiceDatasetInitialImportDatasetConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration">DataLabelingServiceDatasetInitialImportDatasetConfiguration</a>

---


### DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference <a name="DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_labeling_service_dataset

dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfiguration">DataLabelingServiceDatasetInitialRecordGenerationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataLabelingServiceDatasetInitialRecordGenerationConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfiguration">DataLabelingServiceDatasetInitialRecordGenerationConfiguration</a>

---


### DataLabelingServiceDatasetLabelSetItemsList <a name="DataLabelingServiceDatasetLabelSetItemsList" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_labeling_service_dataset

dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataLabelingServiceDatasetLabelSetItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItems">DataLabelingServiceDatasetLabelSetItems</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataLabelingServiceDatasetLabelSetItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItems">DataLabelingServiceDatasetLabelSetItems</a>]]

---


### DataLabelingServiceDatasetLabelSetItemsOutputReference <a name="DataLabelingServiceDatasetLabelSetItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_labeling_service_dataset

dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItems">DataLabelingServiceDatasetLabelSetItems</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataLabelingServiceDatasetLabelSetItems]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItems">DataLabelingServiceDatasetLabelSetItems</a>]

---


### DataLabelingServiceDatasetLabelSetOutputReference <a name="DataLabelingServiceDatasetLabelSetOutputReference" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_labeling_service_dataset

dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.putItems">put_items</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_items` <a name="put_items" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.putItems"></a>

```python
def put_items(
  value: typing.Union[IResolvable, typing.List[DataLabelingServiceDatasetLabelSetItems]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.putItems.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItems">DataLabelingServiceDatasetLabelSetItems</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList">DataLabelingServiceDatasetLabelSetItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.property.itemsInput">items_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItems">DataLabelingServiceDatasetLabelSetItems</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSet">DataLabelingServiceDatasetLabelSet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.property.items"></a>

```python
items: DataLabelingServiceDatasetLabelSetItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList">DataLabelingServiceDatasetLabelSetItemsList</a>

---

##### `items_input`<sup>Optional</sup> <a name="items_input" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.property.itemsInput"></a>

```python
items_input: typing.Union[IResolvable, typing.List[DataLabelingServiceDatasetLabelSetItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItems">DataLabelingServiceDatasetLabelSetItems</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.property.internalValue"></a>

```python
internal_value: DataLabelingServiceDatasetLabelSet
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSet">DataLabelingServiceDatasetLabelSet</a>

---


### DataLabelingServiceDatasetTimeoutsOutputReference <a name="DataLabelingServiceDatasetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_labeling_service_dataset

dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts">DataLabelingServiceDatasetTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataLabelingServiceDatasetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts">DataLabelingServiceDatasetTimeouts</a>]

---



