# `dataOciLimitsLimitDefinitions` Submodule <a name="`dataOciLimitsLimitDefinitions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLimitsLimitDefinitions <a name="DataOciLimitsLimitDefinitions" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_limit_definitions oci_limits_limit_definitions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_limits_limit_definitions

dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions(
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
  filter: typing.Union[IResolvable, typing.List[DataOciLimitsLimitDefinitionsFilter]] = None,
  id: str = None,
  name: str = None,
  service_name: str = None,
  subscription_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_limit_definitions#compartment_id DataOciLimitsLimitDefinitions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilter">DataOciLimitsLimitDefinitionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_limit_definitions#id DataOciLimitsLimitDefinitions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_limit_definitions#name DataOciLimitsLimitDefinitions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.Initializer.parameter.serviceName">service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_limit_definitions#service_name DataOciLimitsLimitDefinitions#service_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.Initializer.parameter.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_limit_definitions#subscription_id DataOciLimitsLimitDefinitions#subscription_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_limit_definitions#compartment_id DataOciLimitsLimitDefinitions#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilter">DataOciLimitsLimitDefinitionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_limit_definitions#filter DataOciLimitsLimitDefinitions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_limit_definitions#id DataOciLimitsLimitDefinitions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_limit_definitions#name DataOciLimitsLimitDefinitions#name}.

---

##### `service_name`<sup>Optional</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.Initializer.parameter.serviceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_limit_definitions#service_name DataOciLimitsLimitDefinitions#service_name}.

---

##### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.Initializer.parameter.subscriptionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_limit_definitions#subscription_id DataOciLimitsLimitDefinitions#subscription_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.resetServiceName">reset_service_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.resetSubscriptionId">reset_subscription_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciLimitsLimitDefinitionsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilter">DataOciLimitsLimitDefinitionsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_service_name` <a name="reset_service_name" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.resetServiceName"></a>

```python
def reset_service_name() -> None
```

##### `reset_subscription_id` <a name="reset_subscription_id" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.resetSubscriptionId"></a>

```python
def reset_subscription_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciLimitsLimitDefinitions resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_limits_limit_definitions

dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_limits_limit_definitions

dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_limits_limit_definitions

dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_limits_limit_definitions

dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciLimitsLimitDefinitions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciLimitsLimitDefinitions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciLimitsLimitDefinitions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_limit_definitions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLimitsLimitDefinitions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterList">DataOciLimitsLimitDefinitionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.limitDefinitions">limit_definitions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsList">DataOciLimitsLimitDefinitionsLimitDefinitionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilter">DataOciLimitsLimitDefinitionsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.filter"></a>

```python
filter: DataOciLimitsLimitDefinitionsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterList">DataOciLimitsLimitDefinitionsFilterList</a>

---

##### `limit_definitions`<sup>Required</sup> <a name="limit_definitions" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.limitDefinitions"></a>

```python
limit_definitions: DataOciLimitsLimitDefinitionsLimitDefinitionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsList">DataOciLimitsLimitDefinitionsLimitDefinitionsList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciLimitsLimitDefinitionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilter">DataOciLimitsLimitDefinitionsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLimitsLimitDefinitionsConfig <a name="DataOciLimitsLimitDefinitionsConfig" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_limits_limit_definitions

dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciLimitsLimitDefinitionsFilter]] = None,
  id: str = None,
  name: str = None,
  service_name: str = None,
  subscription_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_limit_definitions#compartment_id DataOciLimitsLimitDefinitions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilter">DataOciLimitsLimitDefinitionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_limit_definitions#id DataOciLimitsLimitDefinitions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_limit_definitions#name DataOciLimitsLimitDefinitions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsConfig.property.serviceName">service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_limit_definitions#service_name DataOciLimitsLimitDefinitions#service_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsConfig.property.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_limit_definitions#subscription_id DataOciLimitsLimitDefinitions#subscription_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_limit_definitions#compartment_id DataOciLimitsLimitDefinitions#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciLimitsLimitDefinitionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilter">DataOciLimitsLimitDefinitionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_limit_definitions#filter DataOciLimitsLimitDefinitions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_limit_definitions#id DataOciLimitsLimitDefinitions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_limit_definitions#name DataOciLimitsLimitDefinitions#name}.

---

##### `service_name`<sup>Optional</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsConfig.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_limit_definitions#service_name DataOciLimitsLimitDefinitions#service_name}.

---

##### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsConfig.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_limit_definitions#subscription_id DataOciLimitsLimitDefinitions#subscription_id}.

---

### DataOciLimitsLimitDefinitionsFilter <a name="DataOciLimitsLimitDefinitionsFilter" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_limits_limit_definitions

dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_limit_definitions#name DataOciLimitsLimitDefinitions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_limit_definitions#values DataOciLimitsLimitDefinitions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_limit_definitions#regex DataOciLimitsLimitDefinitions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_limit_definitions#name DataOciLimitsLimitDefinitions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_limit_definitions#values DataOciLimitsLimitDefinitions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_limit_definitions#regex DataOciLimitsLimitDefinitions#regex}.

---

### DataOciLimitsLimitDefinitionsLimitDefinitions <a name="DataOciLimitsLimitDefinitionsLimitDefinitions" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_limits_limit_definitions

dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitions()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLimitsLimitDefinitionsFilterList <a name="DataOciLimitsLimitDefinitionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_limits_limit_definitions

dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLimitsLimitDefinitionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilter">DataOciLimitsLimitDefinitionsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciLimitsLimitDefinitionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilter">DataOciLimitsLimitDefinitionsFilter</a>]]

---


### DataOciLimitsLimitDefinitionsFilterOutputReference <a name="DataOciLimitsLimitDefinitionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_limits_limit_definitions

dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilter">DataOciLimitsLimitDefinitionsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciLimitsLimitDefinitionsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsFilter">DataOciLimitsLimitDefinitionsFilter</a>]

---


### DataOciLimitsLimitDefinitionsLimitDefinitionsList <a name="DataOciLimitsLimitDefinitionsLimitDefinitionsList" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_limits_limit_definitions

dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference <a name="DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_limits_limit_definitions

dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.property.areQuotasSupported">are_quotas_supported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.property.isDeprecated">is_deprecated</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.property.isDynamic">is_dynamic</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.property.isEligibleForLimitIncrease">is_eligible_for_limit_increase</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.property.isResourceAvailabilitySupported">is_resource_availability_supported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.property.scopeType">scope_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.property.supportedQuotaFamilies">supported_quota_families</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.property.supportedSubscriptions">supported_subscriptions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitions">DataOciLimitsLimitDefinitionsLimitDefinitions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `are_quotas_supported`<sup>Required</sup> <a name="are_quotas_supported" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.property.areQuotasSupported"></a>

```python
are_quotas_supported: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `is_deprecated`<sup>Required</sup> <a name="is_deprecated" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.property.isDeprecated"></a>

```python
is_deprecated: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_dynamic`<sup>Required</sup> <a name="is_dynamic" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.property.isDynamic"></a>

```python
is_dynamic: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_eligible_for_limit_increase`<sup>Required</sup> <a name="is_eligible_for_limit_increase" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.property.isEligibleForLimitIncrease"></a>

```python
is_eligible_for_limit_increase: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_resource_availability_supported`<sup>Required</sup> <a name="is_resource_availability_supported" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.property.isResourceAvailabilitySupported"></a>

```python
is_resource_availability_supported: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `scope_type`<sup>Required</sup> <a name="scope_type" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.property.scopeType"></a>

```python
scope_type: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `supported_quota_families`<sup>Required</sup> <a name="supported_quota_families" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.property.supportedQuotaFamilies"></a>

```python
supported_quota_families: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_subscriptions`<sup>Required</sup> <a name="supported_subscriptions" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.property.supportedSubscriptions"></a>

```python
supported_subscriptions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLimitsLimitDefinitionsLimitDefinitions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLimitsLimitDefinitions.DataOciLimitsLimitDefinitionsLimitDefinitions">DataOciLimitsLimitDefinitionsLimitDefinitions</a>

---



