# `opsiOpsiConfiguration` Submodule <a name="`opsiOpsiConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsiOpsiConfiguration <a name="OpsiOpsiConfiguration" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration oci_opsi_opsi_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_opsi_configuration

opsiOpsiConfiguration.OpsiOpsiConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  opsi_config_type: str,
  compartment_id: str = None,
  config_item_custom_status: typing.List[str] = None,
  config_item_field: typing.List[str] = None,
  config_items: typing.Union[IResolvable, typing.List[OpsiOpsiConfigurationConfigItems]] = None,
  config_items_applicable_context: typing.List[str] = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  opsi_config_field: typing.List[str] = None,
  system_tags: typing.Mapping[str] = None,
  timeouts: OpsiOpsiConfigurationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.opsiConfigType">opsi_config_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#opsi_config_type OpsiOpsiConfiguration#opsi_config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#compartment_id OpsiOpsiConfiguration#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.configItemCustomStatus">config_item_custom_status</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#config_item_custom_status OpsiOpsiConfiguration#config_item_custom_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.configItemField">config_item_field</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#config_item_field OpsiOpsiConfiguration#config_item_field}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.configItems">config_items</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems">OpsiOpsiConfigurationConfigItems</a>]]</code> | config_items block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.configItemsApplicableContext">config_items_applicable_context</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#config_items_applicable_context OpsiOpsiConfiguration#config_items_applicable_context}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#defined_tags OpsiOpsiConfiguration#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#description OpsiOpsiConfiguration#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#display_name OpsiOpsiConfiguration#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#freeform_tags OpsiOpsiConfiguration#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#id OpsiOpsiConfiguration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.opsiConfigField">opsi_config_field</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#opsi_config_field OpsiOpsiConfiguration#opsi_config_field}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.systemTags">system_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#system_tags OpsiOpsiConfiguration#system_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts">OpsiOpsiConfigurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `opsi_config_type`<sup>Required</sup> <a name="opsi_config_type" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.opsiConfigType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#opsi_config_type OpsiOpsiConfiguration#opsi_config_type}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#compartment_id OpsiOpsiConfiguration#compartment_id}.

---

##### `config_item_custom_status`<sup>Optional</sup> <a name="config_item_custom_status" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.configItemCustomStatus"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#config_item_custom_status OpsiOpsiConfiguration#config_item_custom_status}.

---

##### `config_item_field`<sup>Optional</sup> <a name="config_item_field" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.configItemField"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#config_item_field OpsiOpsiConfiguration#config_item_field}.

---

##### `config_items`<sup>Optional</sup> <a name="config_items" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.configItems"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems">OpsiOpsiConfigurationConfigItems</a>]]

config_items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#config_items OpsiOpsiConfiguration#config_items}

---

##### `config_items_applicable_context`<sup>Optional</sup> <a name="config_items_applicable_context" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.configItemsApplicableContext"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#config_items_applicable_context OpsiOpsiConfiguration#config_items_applicable_context}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#defined_tags OpsiOpsiConfiguration#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#description OpsiOpsiConfiguration#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#display_name OpsiOpsiConfiguration#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#freeform_tags OpsiOpsiConfiguration#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#id OpsiOpsiConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `opsi_config_field`<sup>Optional</sup> <a name="opsi_config_field" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.opsiConfigField"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#opsi_config_field OpsiOpsiConfiguration#opsi_config_field}.

---

##### `system_tags`<sup>Optional</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.systemTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#system_tags OpsiOpsiConfiguration#system_tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts">OpsiOpsiConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#timeouts OpsiOpsiConfiguration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.putConfigItems">put_config_items</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetConfigItemCustomStatus">reset_config_item_custom_status</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetConfigItemField">reset_config_item_field</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetConfigItems">reset_config_items</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetConfigItemsApplicableContext">reset_config_items_applicable_context</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetOpsiConfigField">reset_opsi_config_field</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetSystemTags">reset_system_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_config_items` <a name="put_config_items" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.putConfigItems"></a>

```python
def put_config_items(
  value: typing.Union[IResolvable, typing.List[OpsiOpsiConfigurationConfigItems]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.putConfigItems.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems">OpsiOpsiConfigurationConfigItems</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#create OpsiOpsiConfiguration#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#delete OpsiOpsiConfiguration#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#update OpsiOpsiConfiguration#update}.

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_config_item_custom_status` <a name="reset_config_item_custom_status" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetConfigItemCustomStatus"></a>

```python
def reset_config_item_custom_status() -> None
```

##### `reset_config_item_field` <a name="reset_config_item_field" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetConfigItemField"></a>

```python
def reset_config_item_field() -> None
```

##### `reset_config_items` <a name="reset_config_items" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetConfigItems"></a>

```python
def reset_config_items() -> None
```

##### `reset_config_items_applicable_context` <a name="reset_config_items_applicable_context" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetConfigItemsApplicableContext"></a>

```python
def reset_config_items_applicable_context() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_opsi_config_field` <a name="reset_opsi_config_field" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetOpsiConfigField"></a>

```python
def reset_opsi_config_field() -> None
```

##### `reset_system_tags` <a name="reset_system_tags" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetSystemTags"></a>

```python
def reset_system_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OpsiOpsiConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_opsi_configuration

opsiOpsiConfiguration.OpsiOpsiConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_opsi_configuration

opsiOpsiConfiguration.OpsiOpsiConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_opsi_configuration

opsiOpsiConfiguration.OpsiOpsiConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_opsi_configuration

opsiOpsiConfiguration.OpsiOpsiConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OpsiOpsiConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OpsiOpsiConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OpsiOpsiConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OpsiOpsiConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItems">config_items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList">OpsiOpsiConfigurationConfigItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference">OpsiOpsiConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItemCustomStatusInput">config_item_custom_status_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItemFieldInput">config_item_field_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItemsApplicableContextInput">config_items_applicable_context_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItemsInput">config_items_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems">OpsiOpsiConfigurationConfigItems</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.opsiConfigFieldInput">opsi_config_field_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.opsiConfigTypeInput">opsi_config_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.systemTagsInput">system_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts">OpsiOpsiConfigurationTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItemCustomStatus">config_item_custom_status</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItemField">config_item_field</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItemsApplicableContext">config_items_applicable_context</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.opsiConfigField">opsi_config_field</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.opsiConfigType">opsi_config_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.systemTags">system_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config_items`<sup>Required</sup> <a name="config_items" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItems"></a>

```python
config_items: OpsiOpsiConfigurationConfigItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList">OpsiOpsiConfigurationConfigItemsList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.timeouts"></a>

```python
timeouts: OpsiOpsiConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference">OpsiOpsiConfigurationTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `config_item_custom_status_input`<sup>Optional</sup> <a name="config_item_custom_status_input" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItemCustomStatusInput"></a>

```python
config_item_custom_status_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `config_item_field_input`<sup>Optional</sup> <a name="config_item_field_input" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItemFieldInput"></a>

```python
config_item_field_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `config_items_applicable_context_input`<sup>Optional</sup> <a name="config_items_applicable_context_input" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItemsApplicableContextInput"></a>

```python
config_items_applicable_context_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `config_items_input`<sup>Optional</sup> <a name="config_items_input" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItemsInput"></a>

```python
config_items_input: typing.Union[IResolvable, typing.List[OpsiOpsiConfigurationConfigItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems">OpsiOpsiConfigurationConfigItems</a>]]

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `opsi_config_field_input`<sup>Optional</sup> <a name="opsi_config_field_input" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.opsiConfigFieldInput"></a>

```python
opsi_config_field_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `opsi_config_type_input`<sup>Optional</sup> <a name="opsi_config_type_input" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.opsiConfigTypeInput"></a>

```python
opsi_config_type_input: str
```

- *Type:* str

---

##### `system_tags_input`<sup>Optional</sup> <a name="system_tags_input" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.systemTagsInput"></a>

```python
system_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OpsiOpsiConfigurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts">OpsiOpsiConfigurationTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `config_item_custom_status`<sup>Required</sup> <a name="config_item_custom_status" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItemCustomStatus"></a>

```python
config_item_custom_status: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `config_item_field`<sup>Required</sup> <a name="config_item_field" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItemField"></a>

```python
config_item_field: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `config_items_applicable_context`<sup>Required</sup> <a name="config_items_applicable_context" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItemsApplicableContext"></a>

```python
config_items_applicable_context: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `opsi_config_field`<sup>Required</sup> <a name="opsi_config_field" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.opsiConfigField"></a>

```python
opsi_config_field: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `opsi_config_type`<sup>Required</sup> <a name="opsi_config_type" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.opsiConfigType"></a>

```python
opsi_config_type: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.systemTags"></a>

```python
system_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OpsiOpsiConfigurationConfig <a name="OpsiOpsiConfigurationConfig" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_opsi_configuration

opsiOpsiConfiguration.OpsiOpsiConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  opsi_config_type: str,
  compartment_id: str = None,
  config_item_custom_status: typing.List[str] = None,
  config_item_field: typing.List[str] = None,
  config_items: typing.Union[IResolvable, typing.List[OpsiOpsiConfigurationConfigItems]] = None,
  config_items_applicable_context: typing.List[str] = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  opsi_config_field: typing.List[str] = None,
  system_tags: typing.Mapping[str] = None,
  timeouts: OpsiOpsiConfigurationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.opsiConfigType">opsi_config_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#opsi_config_type OpsiOpsiConfiguration#opsi_config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#compartment_id OpsiOpsiConfiguration#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.configItemCustomStatus">config_item_custom_status</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#config_item_custom_status OpsiOpsiConfiguration#config_item_custom_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.configItemField">config_item_field</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#config_item_field OpsiOpsiConfiguration#config_item_field}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.configItems">config_items</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems">OpsiOpsiConfigurationConfigItems</a>]]</code> | config_items block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.configItemsApplicableContext">config_items_applicable_context</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#config_items_applicable_context OpsiOpsiConfiguration#config_items_applicable_context}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#defined_tags OpsiOpsiConfiguration#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#description OpsiOpsiConfiguration#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#display_name OpsiOpsiConfiguration#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#freeform_tags OpsiOpsiConfiguration#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#id OpsiOpsiConfiguration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.opsiConfigField">opsi_config_field</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#opsi_config_field OpsiOpsiConfiguration#opsi_config_field}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.systemTags">system_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#system_tags OpsiOpsiConfiguration#system_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts">OpsiOpsiConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `opsi_config_type`<sup>Required</sup> <a name="opsi_config_type" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.opsiConfigType"></a>

```python
opsi_config_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#opsi_config_type OpsiOpsiConfiguration#opsi_config_type}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#compartment_id OpsiOpsiConfiguration#compartment_id}.

---

##### `config_item_custom_status`<sup>Optional</sup> <a name="config_item_custom_status" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.configItemCustomStatus"></a>

```python
config_item_custom_status: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#config_item_custom_status OpsiOpsiConfiguration#config_item_custom_status}.

---

##### `config_item_field`<sup>Optional</sup> <a name="config_item_field" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.configItemField"></a>

```python
config_item_field: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#config_item_field OpsiOpsiConfiguration#config_item_field}.

---

##### `config_items`<sup>Optional</sup> <a name="config_items" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.configItems"></a>

```python
config_items: typing.Union[IResolvable, typing.List[OpsiOpsiConfigurationConfigItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems">OpsiOpsiConfigurationConfigItems</a>]]

config_items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#config_items OpsiOpsiConfiguration#config_items}

---

##### `config_items_applicable_context`<sup>Optional</sup> <a name="config_items_applicable_context" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.configItemsApplicableContext"></a>

```python
config_items_applicable_context: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#config_items_applicable_context OpsiOpsiConfiguration#config_items_applicable_context}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#defined_tags OpsiOpsiConfiguration#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#description OpsiOpsiConfiguration#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#display_name OpsiOpsiConfiguration#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#freeform_tags OpsiOpsiConfiguration#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#id OpsiOpsiConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `opsi_config_field`<sup>Optional</sup> <a name="opsi_config_field" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.opsiConfigField"></a>

```python
opsi_config_field: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#opsi_config_field OpsiOpsiConfiguration#opsi_config_field}.

---

##### `system_tags`<sup>Optional</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.systemTags"></a>

```python
system_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#system_tags OpsiOpsiConfiguration#system_tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.timeouts"></a>

```python
timeouts: OpsiOpsiConfigurationTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts">OpsiOpsiConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#timeouts OpsiOpsiConfiguration#timeouts}

---

### OpsiOpsiConfigurationConfigItems <a name="OpsiOpsiConfigurationConfigItems" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_opsi_configuration

opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems(
  config_item_type: str,
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems.property.configItemType">config_item_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#config_item_type OpsiOpsiConfiguration#config_item_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#name OpsiOpsiConfiguration#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#value OpsiOpsiConfiguration#value}. |

---

##### `config_item_type`<sup>Required</sup> <a name="config_item_type" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems.property.configItemType"></a>

```python
config_item_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#config_item_type OpsiOpsiConfiguration#config_item_type}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#name OpsiOpsiConfiguration#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#value OpsiOpsiConfiguration#value}.

---

### OpsiOpsiConfigurationConfigItemsMetadata <a name="OpsiOpsiConfigurationConfigItemsMetadata" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadata.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_opsi_configuration

opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadata()
```


### OpsiOpsiConfigurationConfigItemsMetadataUnitDetails <a name="OpsiOpsiConfigurationConfigItemsMetadataUnitDetails" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_opsi_configuration

opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetails()
```


### OpsiOpsiConfigurationConfigItemsMetadataValueInputDetails <a name="OpsiOpsiConfigurationConfigItemsMetadataValueInputDetails" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_opsi_configuration

opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetails()
```


### OpsiOpsiConfigurationTimeouts <a name="OpsiOpsiConfigurationTimeouts" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_opsi_configuration

opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#create OpsiOpsiConfiguration#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#delete OpsiOpsiConfiguration#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#update OpsiOpsiConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#create OpsiOpsiConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#delete OpsiOpsiConfiguration#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#update OpsiOpsiConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsiOpsiConfigurationConfigItemsList <a name="OpsiOpsiConfigurationConfigItemsList" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_opsi_configuration

opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpsiOpsiConfigurationConfigItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems">OpsiOpsiConfigurationConfigItems</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OpsiOpsiConfigurationConfigItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems">OpsiOpsiConfigurationConfigItems</a>]]

---


### OpsiOpsiConfigurationConfigItemsMetadataList <a name="OpsiOpsiConfigurationConfigItemsMetadataList" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_opsi_configuration

opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpsiOpsiConfigurationConfigItemsMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OpsiOpsiConfigurationConfigItemsMetadataOutputReference <a name="OpsiOpsiConfigurationConfigItemsMetadataOutputReference" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_opsi_configuration

opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.configItemType">config_item_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.unitDetails">unit_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList">OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.valueInputDetails">value_input_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList">OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadata">OpsiOpsiConfigurationConfigItemsMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config_item_type`<sup>Required</sup> <a name="config_item_type" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.configItemType"></a>

```python
config_item_type: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `unit_details`<sup>Required</sup> <a name="unit_details" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.unitDetails"></a>

```python
unit_details: OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList">OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList</a>

---

##### `value_input_details`<sup>Required</sup> <a name="value_input_details" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.valueInputDetails"></a>

```python
value_input_details: OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList">OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.internalValue"></a>

```python
internal_value: OpsiOpsiConfigurationConfigItemsMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadata">OpsiOpsiConfigurationConfigItemsMetadata</a>

---


### OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList <a name="OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_opsi_configuration

opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference <a name="OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_opsi_configuration

opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetails">OpsiOpsiConfigurationConfigItemsMetadataUnitDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.internalValue"></a>

```python
internal_value: OpsiOpsiConfigurationConfigItemsMetadataUnitDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetails">OpsiOpsiConfigurationConfigItemsMetadataUnitDetails</a>

---


### OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList <a name="OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_opsi_configuration

opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference <a name="OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_opsi_configuration

opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.allowedValueType">allowed_value_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.maxValue">max_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.minValue">min_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.possibleValues">possible_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetails">OpsiOpsiConfigurationConfigItemsMetadataValueInputDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_value_type`<sup>Required</sup> <a name="allowed_value_type" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.allowedValueType"></a>

```python
allowed_value_type: str
```

- *Type:* str

---

##### `max_value`<sup>Required</sup> <a name="max_value" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.maxValue"></a>

```python
max_value: str
```

- *Type:* str

---

##### `min_value`<sup>Required</sup> <a name="min_value" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.minValue"></a>

```python
min_value: str
```

- *Type:* str

---

##### `possible_values`<sup>Required</sup> <a name="possible_values" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.possibleValues"></a>

```python
possible_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.internalValue"></a>

```python
internal_value: OpsiOpsiConfigurationConfigItemsMetadataValueInputDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetails">OpsiOpsiConfigurationConfigItemsMetadataValueInputDetails</a>

---


### OpsiOpsiConfigurationConfigItemsOutputReference <a name="OpsiOpsiConfigurationConfigItemsOutputReference" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_opsi_configuration

opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.applicableContexts">applicable_contexts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.defaultValue">default_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.metadata">metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList">OpsiOpsiConfigurationConfigItemsMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.configItemTypeInput">config_item_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.configItemType">config_item_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems">OpsiOpsiConfigurationConfigItems</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `applicable_contexts`<sup>Required</sup> <a name="applicable_contexts" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.applicableContexts"></a>

```python
applicable_contexts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.metadata"></a>

```python
metadata: OpsiOpsiConfigurationConfigItemsMetadataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList">OpsiOpsiConfigurationConfigItemsMetadataList</a>

---

##### `config_item_type_input`<sup>Optional</sup> <a name="config_item_type_input" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.configItemTypeInput"></a>

```python
config_item_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `config_item_type`<sup>Required</sup> <a name="config_item_type" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.configItemType"></a>

```python
config_item_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OpsiOpsiConfigurationConfigItems]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems">OpsiOpsiConfigurationConfigItems</a>]

---


### OpsiOpsiConfigurationTimeoutsOutputReference <a name="OpsiOpsiConfigurationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_opsi_configuration

opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts">OpsiOpsiConfigurationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OpsiOpsiConfigurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts">OpsiOpsiConfigurationTimeouts</a>]

---



