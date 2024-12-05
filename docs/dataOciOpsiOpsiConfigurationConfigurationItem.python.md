# `dataOciOpsiOpsiConfigurationConfigurationItem` Submodule <a name="`dataOciOpsiOpsiConfigurationConfigurationItem` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpsiOpsiConfigurationConfigurationItem <a name="DataOciOpsiOpsiConfigurationConfigurationItem" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item oci_opsi_opsi_configuration_configuration_item}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configuration_configuration_item

dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem(
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
  config_item_field: typing.List[str] = None,
  config_items_applicable_context: typing.List[str] = None,
  id: str = None,
  name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.opsiConfigType">opsi_config_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#opsi_config_type DataOciOpsiOpsiConfigurationConfigurationItem#opsi_config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#compartment_id DataOciOpsiOpsiConfigurationConfigurationItem#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.configItemField">config_item_field</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#config_item_field DataOciOpsiOpsiConfigurationConfigurationItem#config_item_field}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.configItemsApplicableContext">config_items_applicable_context</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#config_items_applicable_context DataOciOpsiOpsiConfigurationConfigurationItem#config_items_applicable_context}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#id DataOciOpsiOpsiConfigurationConfigurationItem#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#name DataOciOpsiOpsiConfigurationConfigurationItem#name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `opsi_config_type`<sup>Required</sup> <a name="opsi_config_type" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.opsiConfigType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#opsi_config_type DataOciOpsiOpsiConfigurationConfigurationItem#opsi_config_type}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#compartment_id DataOciOpsiOpsiConfigurationConfigurationItem#compartment_id}.

---

##### `config_item_field`<sup>Optional</sup> <a name="config_item_field" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.configItemField"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#config_item_field DataOciOpsiOpsiConfigurationConfigurationItem#config_item_field}.

---

##### `config_items_applicable_context`<sup>Optional</sup> <a name="config_items_applicable_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.configItemsApplicableContext"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#config_items_applicable_context DataOciOpsiOpsiConfigurationConfigurationItem#config_items_applicable_context}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#id DataOciOpsiOpsiConfigurationConfigurationItem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#name DataOciOpsiOpsiConfigurationConfigurationItem#name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetConfigItemField">reset_config_item_field</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetConfigItemsApplicableContext">reset_config_items_applicable_context</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetName">reset_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_config_item_field` <a name="reset_config_item_field" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetConfigItemField"></a>

```python
def reset_config_item_field() -> None
```

##### `reset_config_items_applicable_context` <a name="reset_config_items_applicable_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetConfigItemsApplicableContext"></a>

```python
def reset_config_items_applicable_context() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetName"></a>

```python
def reset_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOpsiOpsiConfigurationConfigurationItem resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configuration_configuration_item

dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configuration_configuration_item

dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configuration_configuration_item

dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configuration_configuration_item

dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOpsiOpsiConfigurationConfigurationItem resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOpsiOpsiConfigurationConfigurationItem to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOpsiOpsiConfigurationConfigurationItem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpsiOpsiConfigurationConfigurationItem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.configItems">config_items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.configItemFieldInput">config_item_field_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.configItemsApplicableContextInput">config_items_applicable_context_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.opsiConfigTypeInput">opsi_config_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.configItemField">config_item_field</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.configItemsApplicableContext">config_items_applicable_context</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.opsiConfigType">opsi_config_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `config_items`<sup>Required</sup> <a name="config_items" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.configItems"></a>

```python
config_items: DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `config_item_field_input`<sup>Optional</sup> <a name="config_item_field_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.configItemFieldInput"></a>

```python
config_item_field_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `config_items_applicable_context_input`<sup>Optional</sup> <a name="config_items_applicable_context_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.configItemsApplicableContextInput"></a>

```python
config_items_applicable_context_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `opsi_config_type_input`<sup>Optional</sup> <a name="opsi_config_type_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.opsiConfigTypeInput"></a>

```python
opsi_config_type_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `config_item_field`<sup>Required</sup> <a name="config_item_field" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.configItemField"></a>

```python
config_item_field: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `config_items_applicable_context`<sup>Required</sup> <a name="config_items_applicable_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.configItemsApplicableContext"></a>

```python
config_items_applicable_context: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `opsi_config_type`<sup>Required</sup> <a name="opsi_config_type" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.opsiConfigType"></a>

```python
opsi_config_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpsiOpsiConfigurationConfigurationItemConfig <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configuration_configuration_item

dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  opsi_config_type: str,
  compartment_id: str = None,
  config_item_field: typing.List[str] = None,
  config_items_applicable_context: typing.List[str] = None,
  id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.opsiConfigType">opsi_config_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#opsi_config_type DataOciOpsiOpsiConfigurationConfigurationItem#opsi_config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#compartment_id DataOciOpsiOpsiConfigurationConfigurationItem#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.configItemField">config_item_field</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#config_item_field DataOciOpsiOpsiConfigurationConfigurationItem#config_item_field}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.configItemsApplicableContext">config_items_applicable_context</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#config_items_applicable_context DataOciOpsiOpsiConfigurationConfigurationItem#config_items_applicable_context}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#id DataOciOpsiOpsiConfigurationConfigurationItem#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#name DataOciOpsiOpsiConfigurationConfigurationItem#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `opsi_config_type`<sup>Required</sup> <a name="opsi_config_type" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.opsiConfigType"></a>

```python
opsi_config_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#opsi_config_type DataOciOpsiOpsiConfigurationConfigurationItem#opsi_config_type}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#compartment_id DataOciOpsiOpsiConfigurationConfigurationItem#compartment_id}.

---

##### `config_item_field`<sup>Optional</sup> <a name="config_item_field" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.configItemField"></a>

```python
config_item_field: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#config_item_field DataOciOpsiOpsiConfigurationConfigurationItem#config_item_field}.

---

##### `config_items_applicable_context`<sup>Optional</sup> <a name="config_items_applicable_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.configItemsApplicableContext"></a>

```python
config_items_applicable_context: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#config_items_applicable_context DataOciOpsiOpsiConfigurationConfigurationItem#config_items_applicable_context}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#id DataOciOpsiOpsiConfigurationConfigurationItem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#name DataOciOpsiOpsiConfigurationConfigurationItem#name}.

---

### DataOciOpsiOpsiConfigurationConfigurationItemConfigItems <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configuration_configuration_item

dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItems()
```


### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configuration_configuration_item

dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata()
```


### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configuration_configuration_item

dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails()
```


### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configuration_configuration_item

dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configuration_configuration_item

dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configuration_configuration_item

dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configuration_configuration_item

dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.configItemType">config_item_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.unitDetails">unit_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.valueInputDetails">value_input_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config_item_type`<sup>Required</sup> <a name="config_item_type" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.configItemType"></a>

```python
config_item_type: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `unit_details`<sup>Required</sup> <a name="unit_details" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.unitDetails"></a>

```python
unit_details: DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList</a>

---

##### `value_input_details`<sup>Required</sup> <a name="value_input_details" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.valueInputDetails"></a>

```python
value_input_details: DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata</a>

---


### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configuration_configuration_item

dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configuration_configuration_item

dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails</a>

---


### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configuration_configuration_item

dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configuration_configuration_item

dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.allowedValueType">allowed_value_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.maxValue">max_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.minValue">min_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.possibleValues">possible_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_value_type`<sup>Required</sup> <a name="allowed_value_type" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.allowedValueType"></a>

```python
allowed_value_type: str
```

- *Type:* str

---

##### `max_value`<sup>Required</sup> <a name="max_value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.maxValue"></a>

```python
max_value: str
```

- *Type:* str

---

##### `min_value`<sup>Required</sup> <a name="min_value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.minValue"></a>

```python
min_value: str
```

- *Type:* str

---

##### `possible_values`<sup>Required</sup> <a name="possible_values" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.possibleValues"></a>

```python
possible_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails</a>

---


### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configuration_configuration_item

dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.applicableContexts">applicable_contexts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.configItemType">config_item_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.defaultValue">default_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.metadata">metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.valueSourceConfig">value_source_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItems">DataOciOpsiOpsiConfigurationConfigurationItemConfigItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `applicable_contexts`<sup>Required</sup> <a name="applicable_contexts" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.applicableContexts"></a>

```python
applicable_contexts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `config_item_type`<sup>Required</sup> <a name="config_item_type" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.configItemType"></a>

```python
config_item_type: str
```

- *Type:* str

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.metadata"></a>

```python
metadata: DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `value_source_config`<sup>Required</sup> <a name="value_source_config" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.valueSourceConfig"></a>

```python
value_source_config: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOpsiOpsiConfigurationConfigurationItemConfigItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItems">DataOciOpsiOpsiConfigurationConfigurationItemConfigItems</a>

---



