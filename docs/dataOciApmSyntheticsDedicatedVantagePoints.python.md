# `dataOciApmSyntheticsDedicatedVantagePoints` Submodule <a name="`dataOciApmSyntheticsDedicatedVantagePoints` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApmSyntheticsDedicatedVantagePoints <a name="DataOciApmSyntheticsDedicatedVantagePoints" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points oci_apm_synthetics_dedicated_vantage_points}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_dedicated_vantage_points

dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  apm_domain_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciApmSyntheticsDedicatedVantagePointsFilter]] = None,
  id: str = None,
  name: str = None,
  status: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.apmDomainId">apm_domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#apm_domain_id DataOciApmSyntheticsDedicatedVantagePoints#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#display_name DataOciApmSyntheticsDedicatedVantagePoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter">DataOciApmSyntheticsDedicatedVantagePointsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#id DataOciApmSyntheticsDedicatedVantagePoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#name DataOciApmSyntheticsDedicatedVantagePoints#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#status DataOciApmSyntheticsDedicatedVantagePoints#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.apmDomainId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#apm_domain_id DataOciApmSyntheticsDedicatedVantagePoints#apm_domain_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#display_name DataOciApmSyntheticsDedicatedVantagePoints#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter">DataOciApmSyntheticsDedicatedVantagePointsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#filter DataOciApmSyntheticsDedicatedVantagePoints#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#id DataOciApmSyntheticsDedicatedVantagePoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#name DataOciApmSyntheticsDedicatedVantagePoints#name}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#status DataOciApmSyntheticsDedicatedVantagePoints#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetStatus">reset_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciApmSyntheticsDedicatedVantagePointsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter">DataOciApmSyntheticsDedicatedVantagePointsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_status` <a name="reset_status" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetStatus"></a>

```python
def reset_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciApmSyntheticsDedicatedVantagePoints resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_dedicated_vantage_points

dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_dedicated_vantage_points

dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_dedicated_vantage_points

dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_dedicated_vantage_points

dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciApmSyntheticsDedicatedVantagePoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciApmSyntheticsDedicatedVantagePoints to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciApmSyntheticsDedicatedVantagePoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApmSyntheticsDedicatedVantagePoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.dedicatedVantagePointCollection">dedicated_vantage_point_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList">DataOciApmSyntheticsDedicatedVantagePointsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.apmDomainIdInput">apm_domain_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter">DataOciApmSyntheticsDedicatedVantagePointsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.apmDomainId">apm_domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `dedicated_vantage_point_collection`<sup>Required</sup> <a name="dedicated_vantage_point_collection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.dedicatedVantagePointCollection"></a>

```python
dedicated_vantage_point_collection: DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.filter"></a>

```python
filter: DataOciApmSyntheticsDedicatedVantagePointsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList">DataOciApmSyntheticsDedicatedVantagePointsFilterList</a>

---

##### `apm_domain_id_input`<sup>Optional</sup> <a name="apm_domain_id_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.apmDomainIdInput"></a>

```python
apm_domain_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciApmSyntheticsDedicatedVantagePointsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter">DataOciApmSyntheticsDedicatedVantagePointsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.apmDomainId"></a>

```python
apm_domain_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApmSyntheticsDedicatedVantagePointsConfig <a name="DataOciApmSyntheticsDedicatedVantagePointsConfig" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_dedicated_vantage_points

dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  apm_domain_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciApmSyntheticsDedicatedVantagePointsFilter]] = None,
  id: str = None,
  name: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.apmDomainId">apm_domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#apm_domain_id DataOciApmSyntheticsDedicatedVantagePoints#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#display_name DataOciApmSyntheticsDedicatedVantagePoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter">DataOciApmSyntheticsDedicatedVantagePointsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#id DataOciApmSyntheticsDedicatedVantagePoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#name DataOciApmSyntheticsDedicatedVantagePoints#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#status DataOciApmSyntheticsDedicatedVantagePoints#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.apmDomainId"></a>

```python
apm_domain_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#apm_domain_id DataOciApmSyntheticsDedicatedVantagePoints#apm_domain_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#display_name DataOciApmSyntheticsDedicatedVantagePoints#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciApmSyntheticsDedicatedVantagePointsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter">DataOciApmSyntheticsDedicatedVantagePointsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#filter DataOciApmSyntheticsDedicatedVantagePoints#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#id DataOciApmSyntheticsDedicatedVantagePoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#name DataOciApmSyntheticsDedicatedVantagePoints#name}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#status DataOciApmSyntheticsDedicatedVantagePoints#status}.

---

### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollection <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_dedicated_vantage_points

dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollection()
```


### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItems <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_dedicated_vantage_points

dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItems()
```


### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetails <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_dedicated_vantage_points

dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetails()
```


### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMap <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMap" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMap"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMap.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_dedicated_vantage_points

dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMap()
```


### DataOciApmSyntheticsDedicatedVantagePointsFilter <a name="DataOciApmSyntheticsDedicatedVantagePointsFilter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_dedicated_vantage_points

dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#name DataOciApmSyntheticsDedicatedVantagePoints#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#values DataOciApmSyntheticsDedicatedVantagePoints#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#regex DataOciApmSyntheticsDedicatedVantagePoints#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#name DataOciApmSyntheticsDedicatedVantagePoints#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#values DataOciApmSyntheticsDedicatedVantagePoints#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#regex DataOciApmSyntheticsDedicatedVantagePoints#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_dedicated_vantage_points

dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_dedicated_vantage_points

dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.dvpStackId">dvp_stack_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.dvpStackType">dvp_stack_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.dvpStreamId">dvp_stream_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.dvpVersion">dvp_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetails">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dvp_stack_id`<sup>Required</sup> <a name="dvp_stack_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.dvpStackId"></a>

```python
dvp_stack_id: str
```

- *Type:* str

---

##### `dvp_stack_type`<sup>Required</sup> <a name="dvp_stack_type" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.dvpStackType"></a>

```python
dvp_stack_type: str
```

- *Type:* str

---

##### `dvp_stream_id`<sup>Required</sup> <a name="dvp_stream_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.dvpStreamId"></a>

```python
dvp_stream_id: str
```

- *Type:* str

---

##### `dvp_version`<sup>Required</sup> <a name="dvp_version" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.dvpVersion"></a>

```python
dvp_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetails">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetails</a>

---


### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_dedicated_vantage_points

dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_dedicated_vantage_points

dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_dedicated_vantage_points

dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.disabled">disabled</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.invalid">invalid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.total">total</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMap">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMap</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.disabled"></a>

```python
disabled: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.enabled"></a>

```python
enabled: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `invalid`<sup>Required</sup> <a name="invalid" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.invalid"></a>

```python
invalid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total`<sup>Required</sup> <a name="total" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.total"></a>

```python
total: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMap
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMap">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMap</a>

---


### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_dedicated_vantage_points

dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.apmDomainId">apm_domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.dvpStackDetails">dvp_stack_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.monitorStatusCountMap">monitor_status_count_map</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItems">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.apmDomainId"></a>

```python
apm_domain_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `dvp_stack_details`<sup>Required</sup> <a name="dvp_stack_details" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.dvpStackDetails"></a>

```python
dvp_stack_details: DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList</a>

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `monitor_status_count_map`<sup>Required</sup> <a name="monitor_status_count_map" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.monitorStatusCountMap"></a>

```python
monitor_status_count_map: DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItems">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItems</a>

---


### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_dedicated_vantage_points

dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_dedicated_vantage_points

dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollection">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.property.items"></a>

```python
items: DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollection">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollection</a>

---


### DataOciApmSyntheticsDedicatedVantagePointsFilterList <a name="DataOciApmSyntheticsDedicatedVantagePointsFilterList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_dedicated_vantage_points

dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter">DataOciApmSyntheticsDedicatedVantagePointsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciApmSyntheticsDedicatedVantagePointsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter">DataOciApmSyntheticsDedicatedVantagePointsFilter</a>]]

---


### DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference <a name="DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_dedicated_vantage_points

dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter">DataOciApmSyntheticsDedicatedVantagePointsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciApmSyntheticsDedicatedVantagePointsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter">DataOciApmSyntheticsDedicatedVantagePointsFilter</a>]

---



