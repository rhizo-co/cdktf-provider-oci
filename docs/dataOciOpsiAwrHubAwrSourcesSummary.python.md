# `dataOciOpsiAwrHubAwrSourcesSummary` Submodule <a name="`dataOciOpsiAwrHubAwrSourcesSummary` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpsiAwrHubAwrSourcesSummary <a name="DataOciOpsiAwrHubAwrSourcesSummary" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_sources_summary oci_opsi_awr_hub_awr_sources_summary}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_awr_hub_awr_sources_summary

dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  awr_hub_id: str,
  compartment_id: str = None,
  id: str = None,
  name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.Initializer.parameter.awrHubId">awr_hub_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_sources_summary#awr_hub_id DataOciOpsiAwrHubAwrSourcesSummary#awr_hub_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_sources_summary#compartment_id DataOciOpsiAwrHubAwrSourcesSummary#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_sources_summary#id DataOciOpsiAwrHubAwrSourcesSummary#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_sources_summary#name DataOciOpsiAwrHubAwrSourcesSummary#name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `awr_hub_id`<sup>Required</sup> <a name="awr_hub_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.Initializer.parameter.awrHubId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_sources_summary#awr_hub_id DataOciOpsiAwrHubAwrSourcesSummary#awr_hub_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_sources_summary#compartment_id DataOciOpsiAwrHubAwrSourcesSummary#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_sources_summary#id DataOciOpsiAwrHubAwrSourcesSummary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_sources_summary#name DataOciOpsiAwrHubAwrSourcesSummary#name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.resetName">reset_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.resetName"></a>

```python
def reset_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOpsiAwrHubAwrSourcesSummary resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_awr_hub_awr_sources_summary

dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_awr_hub_awr_sources_summary

dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_awr_hub_awr_sources_summary

dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_awr_hub_awr_sources_summary

dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOpsiAwrHubAwrSourcesSummary resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOpsiAwrHubAwrSourcesSummary to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOpsiAwrHubAwrSourcesSummary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_sources_summary#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpsiAwrHubAwrSourcesSummary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList">DataOciOpsiAwrHubAwrSourcesSummaryItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.awrHubIdInput">awr_hub_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.awrHubId">awr_hub_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.items"></a>

```python
items: DataOciOpsiAwrHubAwrSourcesSummaryItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList">DataOciOpsiAwrHubAwrSourcesSummaryItemsList</a>

---

##### `awr_hub_id_input`<sup>Optional</sup> <a name="awr_hub_id_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.awrHubIdInput"></a>

```python
awr_hub_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `awr_hub_id`<sup>Required</sup> <a name="awr_hub_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.awrHubId"></a>

```python
awr_hub_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpsiAwrHubAwrSourcesSummaryConfig <a name="DataOciOpsiAwrHubAwrSourcesSummaryConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_awr_hub_awr_sources_summary

dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  awr_hub_id: str,
  compartment_id: str = None,
  id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.awrHubId">awr_hub_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_sources_summary#awr_hub_id DataOciOpsiAwrHubAwrSourcesSummary#awr_hub_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_sources_summary#compartment_id DataOciOpsiAwrHubAwrSourcesSummary#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_sources_summary#id DataOciOpsiAwrHubAwrSourcesSummary#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_sources_summary#name DataOciOpsiAwrHubAwrSourcesSummary#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `awr_hub_id`<sup>Required</sup> <a name="awr_hub_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.awrHubId"></a>

```python
awr_hub_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_sources_summary#awr_hub_id DataOciOpsiAwrHubAwrSourcesSummary#awr_hub_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_sources_summary#compartment_id DataOciOpsiAwrHubAwrSourcesSummary#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_sources_summary#id DataOciOpsiAwrHubAwrSourcesSummary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_sources_summary#name DataOciOpsiAwrHubAwrSourcesSummary#name}.

---

### DataOciOpsiAwrHubAwrSourcesSummaryItems <a name="DataOciOpsiAwrHubAwrSourcesSummaryItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_awr_hub_awr_sources_summary

dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOpsiAwrHubAwrSourcesSummaryItemsList <a name="DataOciOpsiAwrHubAwrSourcesSummaryItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_awr_hub_awr_sources_summary

dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference <a name="DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_awr_hub_awr_sources_summary

dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.awrHubId">awr_hub_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.awrSourceDatabaseId">awr_source_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.hoursSinceLastImport">hours_since_last_import</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.maxSnapshotIdentifier">max_snapshot_identifier</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.minSnapshotIdentifier">min_snapshot_identifier</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.snapshotsUploaded">snapshots_uploaded</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.timeFirstSnapshotGenerated">time_first_snapshot_generated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.timeLastSnapshotGenerated">time_last_snapshot_generated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItems">DataOciOpsiAwrHubAwrSourcesSummaryItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `awr_hub_id`<sup>Required</sup> <a name="awr_hub_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.awrHubId"></a>

```python
awr_hub_id: str
```

- *Type:* str

---

##### `awr_source_database_id`<sup>Required</sup> <a name="awr_source_database_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.awrSourceDatabaseId"></a>

```python
awr_source_database_id: str
```

- *Type:* str

---

##### `hours_since_last_import`<sup>Required</sup> <a name="hours_since_last_import" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.hoursSinceLastImport"></a>

```python
hours_since_last_import: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_snapshot_identifier`<sup>Required</sup> <a name="max_snapshot_identifier" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.maxSnapshotIdentifier"></a>

```python
max_snapshot_identifier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_snapshot_identifier`<sup>Required</sup> <a name="min_snapshot_identifier" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.minSnapshotIdentifier"></a>

```python
min_snapshot_identifier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `snapshots_uploaded`<sup>Required</sup> <a name="snapshots_uploaded" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.snapshotsUploaded"></a>

```python
snapshots_uploaded: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_first_snapshot_generated`<sup>Required</sup> <a name="time_first_snapshot_generated" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.timeFirstSnapshotGenerated"></a>

```python
time_first_snapshot_generated: str
```

- *Type:* str

---

##### `time_last_snapshot_generated`<sup>Required</sup> <a name="time_last_snapshot_generated" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.timeLastSnapshotGenerated"></a>

```python
time_last_snapshot_generated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOpsiAwrHubAwrSourcesSummaryItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItems">DataOciOpsiAwrHubAwrSourcesSummaryItems</a>

---



