# `dataOciApmSyntheticsOnPremiseVantagePoints` Submodule <a name="`dataOciApmSyntheticsOnPremiseVantagePoints` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApmSyntheticsOnPremiseVantagePoints <a name="DataOciApmSyntheticsOnPremiseVantagePoints" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points oci_apm_synthetics_on_premise_vantage_points}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_points

dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints(
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
  filter: typing.Union[IResolvable, typing.List[DataOciApmSyntheticsOnPremiseVantagePointsFilter]] = None,
  id: str = None,
  name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.Initializer.parameter.apmDomainId">apm_domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#apm_domain_id DataOciApmSyntheticsOnPremiseVantagePoints#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#display_name DataOciApmSyntheticsOnPremiseVantagePoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter">DataOciApmSyntheticsOnPremiseVantagePointsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#id DataOciApmSyntheticsOnPremiseVantagePoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#name DataOciApmSyntheticsOnPremiseVantagePoints#name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.Initializer.parameter.apmDomainId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#apm_domain_id DataOciApmSyntheticsOnPremiseVantagePoints#apm_domain_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#display_name DataOciApmSyntheticsOnPremiseVantagePoints#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter">DataOciApmSyntheticsOnPremiseVantagePointsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#filter DataOciApmSyntheticsOnPremiseVantagePoints#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#id DataOciApmSyntheticsOnPremiseVantagePoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#name DataOciApmSyntheticsOnPremiseVantagePoints#name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.resetName">reset_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciApmSyntheticsOnPremiseVantagePointsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter">DataOciApmSyntheticsOnPremiseVantagePointsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.resetName"></a>

```python
def reset_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciApmSyntheticsOnPremiseVantagePoints resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_points

dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_points

dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_points

dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_points

dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciApmSyntheticsOnPremiseVantagePoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciApmSyntheticsOnPremiseVantagePoints to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciApmSyntheticsOnPremiseVantagePoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApmSyntheticsOnPremiseVantagePoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList">DataOciApmSyntheticsOnPremiseVantagePointsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.onPremiseVantagePointCollection">on_premise_vantage_point_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.apmDomainIdInput">apm_domain_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter">DataOciApmSyntheticsOnPremiseVantagePointsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.apmDomainId">apm_domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.filter"></a>

```python
filter: DataOciApmSyntheticsOnPremiseVantagePointsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList">DataOciApmSyntheticsOnPremiseVantagePointsFilterList</a>

---

##### `on_premise_vantage_point_collection`<sup>Required</sup> <a name="on_premise_vantage_point_collection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.onPremiseVantagePointCollection"></a>

```python
on_premise_vantage_point_collection: DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList</a>

---

##### `apm_domain_id_input`<sup>Optional</sup> <a name="apm_domain_id_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.apmDomainIdInput"></a>

```python
apm_domain_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciApmSyntheticsOnPremiseVantagePointsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter">DataOciApmSyntheticsOnPremiseVantagePointsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.apmDomainId"></a>

```python
apm_domain_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApmSyntheticsOnPremiseVantagePointsConfig <a name="DataOciApmSyntheticsOnPremiseVantagePointsConfig" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_points

dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  apm_domain_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciApmSyntheticsOnPremiseVantagePointsFilter]] = None,
  id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.apmDomainId">apm_domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#apm_domain_id DataOciApmSyntheticsOnPremiseVantagePoints#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#display_name DataOciApmSyntheticsOnPremiseVantagePoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter">DataOciApmSyntheticsOnPremiseVantagePointsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#id DataOciApmSyntheticsOnPremiseVantagePoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#name DataOciApmSyntheticsOnPremiseVantagePoints#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.apmDomainId"></a>

```python
apm_domain_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#apm_domain_id DataOciApmSyntheticsOnPremiseVantagePoints#apm_domain_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#display_name DataOciApmSyntheticsOnPremiseVantagePoints#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciApmSyntheticsOnPremiseVantagePointsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter">DataOciApmSyntheticsOnPremiseVantagePointsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#filter DataOciApmSyntheticsOnPremiseVantagePoints#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#id DataOciApmSyntheticsOnPremiseVantagePoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#name DataOciApmSyntheticsOnPremiseVantagePoints#name}.

---

### DataOciApmSyntheticsOnPremiseVantagePointsFilter <a name="DataOciApmSyntheticsOnPremiseVantagePointsFilter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_points

dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#name DataOciApmSyntheticsOnPremiseVantagePoints#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#values DataOciApmSyntheticsOnPremiseVantagePoints#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#regex DataOciApmSyntheticsOnPremiseVantagePoints#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#name DataOciApmSyntheticsOnPremiseVantagePoints#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#values DataOciApmSyntheticsOnPremiseVantagePoints#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#regex DataOciApmSyntheticsOnPremiseVantagePoints#regex}.

---

### DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollection <a name="DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_points

dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollection()
```


### DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItems <a name="DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_points

dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItems()
```


### DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummary <a name="DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummary" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummary.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_points

dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummary()
```


### DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilities <a name="DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilities" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilities.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_points

dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilities()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciApmSyntheticsOnPremiseVantagePointsFilterList <a name="DataOciApmSyntheticsOnPremiseVantagePointsFilterList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_points

dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter">DataOciApmSyntheticsOnPremiseVantagePointsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciApmSyntheticsOnPremiseVantagePointsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter">DataOciApmSyntheticsOnPremiseVantagePointsFilter</a>]]

---


### DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference <a name="DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_points

dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter">DataOciApmSyntheticsOnPremiseVantagePointsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciApmSyntheticsOnPremiseVantagePointsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter">DataOciApmSyntheticsOnPremiseVantagePointsFilter</a>]

---


### DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList <a name="DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_points

dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference <a name="DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_points

dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.apmDomainId">apm_domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.workersSummary">workers_summary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItems">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.apmDomainId"></a>

```python
apm_domain_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `workers_summary`<sup>Required</sup> <a name="workers_summary" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.workersSummary"></a>

```python
workers_summary: DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItems">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItems</a>

---


### DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList <a name="DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_points

dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference <a name="DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_points

dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.property.capability">capability</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.property.onPremiseVantagePointCount">on_premise_vantage_point_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilities">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capability`<sup>Required</sup> <a name="capability" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.property.capability"></a>

```python
capability: str
```

- *Type:* str

---

##### `on_premise_vantage_point_count`<sup>Required</sup> <a name="on_premise_vantage_point_count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.property.onPremiseVantagePointCount"></a>

```python
on_premise_vantage_point_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilities
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilities">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilities</a>

---


### DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList <a name="DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_points

dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference <a name="DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_points

dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.available">available</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.availableCapabilities">available_capabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.disabled">disabled</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.minVersion">min_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.total">total</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.used">used</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummary">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `available`<sup>Required</sup> <a name="available" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.available"></a>

```python
available: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `available_capabilities`<sup>Required</sup> <a name="available_capabilities" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.availableCapabilities"></a>

```python
available_capabilities: DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList</a>

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.disabled"></a>

```python
disabled: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_version`<sup>Required</sup> <a name="min_version" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.minVersion"></a>

```python
min_version: str
```

- *Type:* str

---

##### `total`<sup>Required</sup> <a name="total" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.total"></a>

```python
total: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `used`<sup>Required</sup> <a name="used" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.used"></a>

```python
used: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummary
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummary">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummary</a>

---


### DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList <a name="DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_points

dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference <a name="DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_points

dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollection">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.property.items"></a>

```python
items: DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollection">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollection</a>

---



